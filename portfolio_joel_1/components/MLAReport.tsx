import Latex from "react-latex-next";
import 'katex/dist/katex.min.css';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface PdfViewProps {
  pdfPath: string;
  fileName?: string;
}
interface OptionData {
  model: string
  rmseCall: number
  maeCall: number
  r2Call: number
  rmsePut: number
  maePut: number
  r2Put: number
}

const spxData: OptionData[] = [
  { model: "BSM", rmseCall: 112.55, maeCall: 60.69, r2Call: 0.990, rmsePut: 112.55, maePut: 60.99, r2Put: 0.99 },
  { model: "SVR", rmseCall: 17.2, maeCall: 4.55, r2Call: 0.990, rmsePut: 44.03, maePut: 4.58, r2Put: 0.991 },
  { model: "ANN", rmseCall: 3.82, maeCall: 2.95, r2Call: 0.994, rmsePut: 20.04, maePut: 8.02, r2Put: 0.92 },
  { model: "LSTM", rmseCall: 40.803, maeCall: 37.445, r2Call: 0.786, rmsePut: 87.273, maePut: 41.859, r2Put: 0.964 },
]

const spxwData: OptionData[] = [
  { model: "BSM", rmseCall: 112.55, maeCall: 60.69, r2Call: 0.99, rmsePut: 112.55, maePut: 60.99, r2Put: 0.99 },
  { model: "SVR", rmseCall: 17.06, maeCall: 6.79, r2Call: 0.991, rmsePut: 13.37, maePut: 5.29, r2Put: 0.991 },
  { model: "ANN", rmseCall: 19.28, maeCall: 6.14, r2Call: 0.91, rmsePut: 6.14, maePut: 3.14, r2Put: 0.97 },
  { model: "LSTM", rmseCall: 40.803, maeCall: 37.445, r2Call: 0.786, rmsePut: 87.273, maePut: 41.859, r2Put: 0.964 },
]

const OptionsTable: React.FC<{ data: OptionData[]; title: string }> = ({ data, title }) => {
  console.log(title)
  const getBestModel = (metric: keyof OptionData, isLower = true) => {
    return data.reduce((best, current) =>
      isLower ? (current[metric] < best[metric] ? current : best) : current[metric] > best[metric] ? current : best,
    ).model
  }

  return (

    <div className="">
      <Table>
        <TableHeader>
          <TableRow className="text-primary-foreground">
            <TableHead className="w-[100px]">Models</TableHead>
            <TableHead>RMSE (Call)</TableHead>
            <TableHead>MAE (Call)</TableHead>
            <TableHead>R² (Call)</TableHead>
            <TableHead>RMSE (Put)</TableHead>
            <TableHead>MAE (Put)</TableHead>
            <TableHead>R² (Put)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.model}>
              <TableCell className="font-medium">{row.model}</TableCell>
              <TableCell className={row.model === getBestModel("rmseCall") ? "bg-green-900 text-accent-foreground" : ""}>
                {row.rmseCall.toFixed(2)}
              </TableCell>
              <TableCell className={row.model === getBestModel("maeCall") ? "bg-green-900 text-accent-foreground" : ""}>
                {row.maeCall.toFixed(2)}
              </TableCell>
              <TableCell className={row.model === getBestModel("r2Call", false) ? "bg-green-900 text-accent-foreground" : ""}>
                {row.r2Call.toFixed(2)}
              </TableCell>
              <TableCell className={row.model === getBestModel("rmsePut") ? "bg-green-900 text-accent-foreground" : ""}>
                {row.rmsePut.toFixed(2)}
              </TableCell>
              <TableCell className={row.model === getBestModel("maePut") ? "bg-green-900 text-accent-foreground" : ""}>
                {row.maePut.toFixed(2)}
              </TableCell>
              <TableCell className={row.model === getBestModel("r2Put", false) ? "bg-green-900 text-accent-foreground" : ""}>
                {row.r2Put.toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

const ANNlatex = `
    \<strong>Forwards Propagation Formulas (Binary Classifier)}</strong>
    \\[
    z_{n-1} = a_{n-2} W_{n-1} + b_{n-1} \\tag{1}
    \\]
    \\[
    a_{n-1} = \\text{LeakyReLU}(z_{n-1}) \\tag{2}
    \\]
    \\[
    z_n = a_{n-1} W_n + b_n \\tag{3}
    \\]
    \\[
    a_n = \\sigma(z_n) \\tag{4}
    \\]
    \\[
    \\textcolor{white}{\\hat{y}} = a_n \\tag{5}
    \\]

    \<strong>Backwards Propagation Formulas (Binary Classifier)</strong>
    \\[
    \\delta_n = \\frac{\\partial \\mathcal{L}}{\\partial z_n-1} = \\textcolor{white}{\\hat{y}} - y \\tag{B-1}
    \\]
    \\[
    \\delta_{n-1} = \\delta_n W_{n-1}^\\top \\cdot \\text{LeakyReLU}'(z_{n-2}) \\tag{B-2}
    \\]
    \\[
    \\frac{\\partial \\mathcal{L}}{\\partial W_{n-1}} = a_{n-2}^\\top \\delta_{n} \\tag{B-3}
    \\]
    \\[
    \\frac{\\partial \\mathcal{L}}{\\partial b_{n-1}} = \\delta_{n} \\tag{B-4}
    \\]

    \<strong>Forwards Propagation Formulas (Regressor)</strong>
    \\[
    z_{n-1} = a_{n-2} W_{n-1} + b_{n-1} \\tag{1}
    \\]
    \\[
    a_{n-1} = \\text{LeakyReLU}(z_{n-1}) \\tag{2}
    \\]
    \\[
    z_{n-2} = a_{n-1} W_{n-2} + b_{n-2} \\tag{3}
    \\]
    \\[
    a_{n-2} = \\text{LeakyReLU}(z_{n-2}) \\tag{4}
    \\]
    \\[
    z_n = a_{n-2} W_n + b_n \\tag{5}
    \\]
    \\[
    \\textcolor{white}{\\hat{y}} = z_n \\tag{6}
    \\]

    \<strong>Backwards Propagation Formulas (Regressor)</strong>
    \\[
    \\delta_n = \\frac{\\partial \\mathcal{L}}{\\partial z_n} = \\textcolor{white}{\\hat{y}} - y \\tag{B-1}
    \\]
    \\[
    \\delta_{n-1} = \\delta_n W_n^\\top \\cdot \\text{LeakyReLU}'(z_{n-1}) \\tag{B-2}
    \\]
    \\[
    \\delta_{n-2} = \\delta_{n-1} W_{n-1}^\\top \\cdot \\text{LeakyReLU}'(z_{n-2}) \\tag{B-3}
    \\]
    \\[
    \\frac{\\partial \\mathcal{L}}{\\partial W_{n-1}} = a_{n-2}^\\top \\delta_{n-1} \\tag{B-4}
    \\]
    \\[
    \\frac{\\partial \\mathcal{L}}{\\partial b_{n-1}} = \\delta_{n-1} \\tag{B-5}
    \\]
    \\[
    \\frac{\\partial \\mathcal{L}}{\\partial W_{n-2}} = a_{n-3}^\\top \\delta_{n-2} \\tag{B-6}
    \\]
    \\[
    \\frac{\\partial \\mathcal{L}}{\\partial b_{n-2}} = \\delta_{n-2} \\tag{B-7}
    \\]

    \<strong>Model weights and biases would be updated</strong>
    \\[
    W_{i} = W_i - \\eta \\cdot \\frac{\\partial \\mathcal{L}}{\\partial W_i} \\tag{B-8}
    \\]
    \\[
    b_i = b_i - \\eta \\cdot \\frac{\\partial \\mathcal{L}}{\\partial b_i} \\tag{B-9}
    \\]
  `;

const BSMlatex = `
  The BSM model is represented by a second-order partial differential equation.
  \\[
  \\frac{\\partial V}{\\partial t} + \\frac{1}{2}\\sigma^2 \\frac{\\partial^2 V}{\\partial S^2} + r S \\frac{\\partial^2 V}{\\partial S} -r V = 0
  \\]

  A key insight behind the equation is the concept of risk-neutral pricing, where the option's value can be hedged perfectly by dynamically buying or selling the underlying asset and a risk-free bond. This ensures that the option has a unique "fair" price, calculated by solving the equation under appropriate boundary and terminal conditions.

  For European call and put options, the closed-form solutions are given as:
  \\[
      C(S_t, t) = N(d_1) S_t - N(d_2) K e^{-r (T - t)}
  \\]
  \\[
      P(S_t, t) = N(-d_2) K e^{-r (T - t)} - N(-d_1) S_t
  \\]
  Where:
  \\[
      d_1 = \\frac{1}{\\sigma \\sqrt{T - t}} \\left[ \\ln \\left(\\frac{S_t}{K}\\right) + \\left(r + \\frac{\\sigma^2}{2}\\right) (T - t) \\right]
  \\]
  \\[
      d_2 = d_1 - \\sigma \\sqrt{T - t}
  \\]
`;

const BSMTableData = [
  { symbol: "S_t", description: "Current price of the underlying asset" },
  { symbol: "K", description: "Strike price of the option" },
  { symbol: "T - t", description: "Time to maturity (in years)" },
  { symbol: "r", description: "Risk-free interest rate" },
  { symbol: "σ", description: "Volatility of the asset's returns" },
  { symbol: "C(S_t, t)", description: "Price of a European call option" },
  { symbol: "P(S_t, t)", description: "Price of a European put option" },
  { symbol: "N(⋅)", description: "Cumulative distribution function of the standard normal distribution" },
  { symbol: "d₁", description: "Intermediate calculation term for the Black-Scholes formula" },
  { symbol: "d₂", description: "Intermediate calculation term for the Black-Scholes formula" },
  { symbol: "V", description: "Option price as a function of time and stock price" },
  { symbol: "∂V/∂t", description: "Partial derivative of V with respect to time" },
  { symbol: "∂²V/∂S²", description: "Second partial derivative of V with respect to stock price" },
];

export default function MLAReport({ pdfPath, fileName }: PdfViewProps) {
  console.log(pdfPath, fileName);
  return (
    <div className="w-full h-full space-y-4">
      <section>
        <div className="flex w-full h-[60vh] justify-center">
          <iframe src={pdfPath} allow="fullscreen" className="w-[75%] h-full rounded-lg"></iframe>
        </div>
      </section>


      <section>
        <h3 className="text-xl font-bold border-b border-white/20 pb-2">
          ANN Formulae
        </h3>
        <div className="prose">
          <Latex>{ANNlatex}</Latex>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-bold border-b border-white/20 pb-2">
          BSM (Traditional Mathematical Method) Formulae
        </h3>
        <div className="prose">
          <Latex>{BSMlatex}</Latex>
          <table className="min-w-full border border-primary-foreground">
            <thead>
              <tr className="">
                <th className="border border-primary-foreground px-4 py-2">Symbol</th>
                <th className="border border-primary-foreground px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td colSpan={2} className="border border-primary-foreground px-4 py-2 font-bold text-center">
                  Black-Scholes Model Symbols
                </td>
              </tr>
              {BSMTableData.map((row, index) => (
                <tr key={index} className="odd:bg-secondary even:bg-primary">
                  <td className="border border-primary-foreground px-4 py-2 font-mono">{row.symbol}</td>
                  <td className="border border-primary-foreground px-4 py-2">{row.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="h-auto">
        <h3 className="text-xl font-bold border-b border-white/20 pb-2">
          Results
        </h3>
        <div className="space-y-4">
          <OptionsTable data={spxData} title="SPX Options" />
          <OptionsTable data={spxwData} title="SPXW Options" />
        </div>
      </section>


    </div>
  );
}
