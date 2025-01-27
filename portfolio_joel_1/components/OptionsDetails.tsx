import Image from "next/image"
import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
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

        <div className="overflow-x-auto text-sm lg:text-base">
            <Table>
                <TableHeader>
                    <TableRow className="text-white">
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
                            <TableCell className={row.model === getBestModel("rmseCall") ? "bg-green-900" : ""}>
                                {row.rmseCall.toFixed(2)}
                            </TableCell>
                            <TableCell className={row.model === getBestModel("maeCall") ? "bg-green-900" : ""}>
                                {row.maeCall.toFixed(2)}
                            </TableCell>
                            <TableCell className={row.model === getBestModel("r2Call", false) ? "bg-green-900" : ""}>
                                {row.r2Call.toFixed(2)}
                            </TableCell>
                            <TableCell className={row.model === getBestModel("rmsePut") ? "bg-green-900" : ""}>
                                {row.rmsePut.toFixed(2)}
                            </TableCell>
                            <TableCell className={row.model === getBestModel("maePut") ? "bg-green-900" : ""}>
                                {row.maePut.toFixed(2)}
                            </TableCell>
                            <TableCell className={row.model === getBestModel("r2Put", false) ? "bg-green-900" : ""}>
                                {row.r2Put.toFixed(2)}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}


export default function OptionsDetails() {
    return (
        <div className="space-y-10 text-sm lg:text-base pr-5 lg:px-0">
            <section>
                <div className="text-white/80 space-y-4 ">
                    <p><Link href={"https://www.investopedia.com/terms/o/option.asp"} className="text-accent hover:text-blue-300 underline transition-colors">Options</Link> are financial derivatives that grant buyers the right, but not the obligation, to buy or sell an asset at a predetermined price. Accurate options pricing is crucial for developing effective hedging strategies, assessing potential risks, and protecting portfolios against adverse market movements. Additionally, it creates profit opportunities by identifying mispriced options in the market. However, due to market unpredictability and the complex, non-linear relationships between features, accurately pricing options remains a significant and challenging problem.</p>

                    <p>The <span className="text-white font-bold">Black-Scholes model (BSM)</span>, is a traditionally used mathematical option pricing framework, and relies on several key assumptions—constant volatility, a log-normal distribution of asset returns, and constant interest rates. These assumptions rarely hold true in real-world markets, limiting the model&apos;s ability to generalize effectively.</p>

                    <p>The inherent complexity of non-linear feature interactions in options pricing provides an opportunity to leverage machine learning (ML) models for better predictions. The ML models we employed include <span className="text-white font-bold">Support Vector Regression (SVR)</span>, <span className="text-white font-bold">Long Short-Term Memory (LSTM)</span> networks, and <span className="text-white font-bold">Artificial Neural Networks (ANN)</span>.
                    </p>

                    <p>Models were developed for both puts and calls and evaluated against one another on the basis of Root Mean Squared Error (RMSE), Mean Absolute Error (MAE), and coefficient of determination (R-square).</p>
                </div>
            </section>

            <section className="">
                <h3 className="text-xl font-bold mb-2 border-b border-white/20 pb-2">Data Set</h3>
                <div className="space-y-4">
                    <p className="text-white/80 mb-4">
                        We analyzed SPX and SPXW options data, consisting of 1,021,314 rows collected at 3600 second intervals over
                        six trading days across four months (July 2024 to October 2024). Our exploratory data analysis (EDA) revealed
                        three key insights:
                    </p>
                    <ul className="text-white/80 space-y-3 mb-4 pl-5">
                        {[
                            "The data exhibits complex, non-linear relationships between features, making predictions challenging.",
                            "The market exhibits a cautiously bullish sentiment.",
                            "The market during the observed period is generally stable.",
                        ].map((item, index) => (
                            <li key={index} className="flex items-start">
                                <span className="inline-block w-1 h-1 mr-2 mt-2 bg-accent rounded-full flex-shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-white/80 mb-4">
                        The first observation underscores the potential for machine learning to address this problem effectively. The
                        second and third observations suggest that the market&apos;s stability during the observed period makes it
                        well-suited for training predictive models.
                    </p>
                    <p className="text-white/80">
                        The data source for this project was the{" "}
                        <Link href={"https://www.cboe.com/data"} className="text-accent hover:text-blue-300 underline transition-colors">
                            Chicago Board Options Exchange
                        </Link>
                        .
                    </p>
                </div>
            </section>


            <section>
                <h3 className="text-xl font-bold mb-2 border-white/20 pb-2 border-b">Black Scholes Model</h3>
                <div className="space-y-4">
                    <p className="text-white/80">
                        The <span className="text-white font-bold">Black-Scholes model (BSM)</span>, developed in 1973, prices European-style options with significant and unrealistic assumptions (Constant volatility, log-normal distribution of asset returns, and assumption of constant interest rates).  <span>Insert latex formula for BSM</span>.
                    </p>
                    <p className="text-white/80">
                        This serves as our traditional baseline for comparison to evaluate performance improvements made by ML approaches.
                    </p>
                </div>
            </section>

            <section className="">
                <h3 className="text-xl font-bold mb-2 border-white/20 pb-2 border-b">Support Vector Regression (SVR)</h3>
                <div className="space-y-4">
                    <p className="text-white/80">
                        <span className="text-white font-bold">SVR</span> is an ML approach that aims to find a function that approximates the relationship between input features and output values. Limitations our group faced were exceptionally long running times with our large dataset.Support Vector Regression (SVR) model is an adaptation of Support Vector
                        Machines (SVM) for regression tasks. SVR aims to find a function that approximates the relationship between input features and a continuous target variable
                        while minimising prediction error, rather than classifying data into categories.
                    </p>

                    <p className="text-white/80">
                        The <span className="text-white font-bold">SVR</span> model outperformed <span className="text-white font-bold">BSM</span>.
                    </p>
                </div>
            </section>

            <section>
                <h3 className="text-xl font-bold mb-2 border-b border-white/20 pb-2">Long Short-Term Memory (LSTM)</h3>
                <div className="space-y-4">
                    <section className="flex flex-col md:flex-row gap-8 items-center ">
                        <div className="flex-1 order-2 lg:order-1 space-y-4">
                            <p className="text-white/80">
                                The <span className="font-bold text-white">LSTM</span> model is designed to handle data that depends on time sequences, making it effective for tasks like time-series forecasting. The key difference from traditional neural networks is that LSTM includes memory cells and gate mechanisms, letting it retain information from previous states. This &apos;memory&apos; allows the model to use historical data as context, ideally improving accuracy when predicting option prices over time.
                                Additionally, the structure of <span className="font-bold text-white">LSTM</span> helps avoid issues like gradient explosion or vanishing gradients that traditional RNNs face, making it reliable for long-term sequences.
                            </p>
                            <p className="text-white/80">
                                Additionally, the structure of <span className="font-bold text-white">LSTM</span> helps avoid issues like gradient explosion or vanishing gradients that traditional RNNs face, making it reliable for long-term sequences.
                            </p>
                        </div>
                        <div className="flex-1 flex justify-center items-center order-1 lg:order-2">
                            <Image
                                src="/assets/LSTM.png"
                                alt="LSTM Model Architecture"
                                width={400}
                                height={300}
                                className="rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
                            />
                        </div>
                    </section>
                    <section>
                        <p className="text-white/80">
                            Our <span className="text-white font-bold">LSTM</span> out performed our <span className="font-bold text-white">SVR</span>, but was itself outperformed by our <span className="text-white font-bold">ANN</span> approach below. Our group believes that our training data is a limiting factor in this situation, and with longer continuous time sequences of data performance will improve.
                        </p>
                    </section>
                </div>
            </section>

            {/* ANN */}
            <div>
                <h3 className="text-xl font-bold mb-2 border-b border-white/20 pb-2">Artificial Neural Network (ANN)</h3>
                <div className="space-y-4">
                    <p className="text-white/80">
                        Our final model, the <span className="font-bold text-white">ANN</span>, is a deep learning model comprising an input layer for data features, hidden layers for processing, and an output layer for predictions. Its adaptability lies in adjusting weights and biases via back-propagation, making it ideal for tasks like option pricing and financial modeling.
                    </p>
                    <section className="flex flex-col md:flex-row gap-8 items-center ">
                        <div className="flex-1 order-2 lg:order-1">
                            <p className="text-white/80">
                                Developing this model was my key contribution. Initially, a <span className="text-white font-bold">&apos;Single-Stage ANN&apos;</span> was implemented with two hidden layers (64 and 32 nodes) and an output node for price prediction. However, this approach suffered from overfitting due to the dataset&apos;s noise, as it included numerous untraded options recorded with a closing price of zero. These zeros skewed the model and led to poor performance, necessitating a new approach.
                            </p>
                        </div>
                        <div className="flex-1 flex justify-center items-center order-1 lg:order-2 p-1">
                            <Image
                                src="/assets/ANN_initial.png"
                                alt="Hybrid ANN Model Diagram"
                                width={300}
                                height={300}
                                className="rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
                            />
                        </div>
                    </section>
                    <section className="flex flex-col md:flex-row gap-8 items-center ">
                        <div className="flex-1 order-2 lg:order-1">
                            <p className="text-white/80">
                                The most effective solution I devised was the <span className="text-white font-bold">&apos;Two-Stage ANN&apos;</span>.
                                <br />
                                <span className="font-bold">Stage 1: Binary Classifier</span> - This stage predicts whether an option is buyable, filtering out irrelevant options (e.g., those with zero closing prices) to focus on tradable ones.
                                <br />
                                <span className="font-bold">Stage 2: Price Regressor</span> - The filtered data is used to predict the price of buyable options through regression.
                                <br />
                                By separating classification and regression, this approach improves focus, reduces overfitting, and enhances efficiency.
                            </p>
                        </div>
                        <div className="flex-1 flex justify-center items-center order-1 lg:order-2 p-1">
                            <Image
                                src="/assets/ANN_final.png"
                                alt="Hybrid ANN Model Diagram"
                                width={600}
                                height={300}
                                className="rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
                            />
                        </div>
                    </section>
                    <p>
                        The general structure of my models was similar with differences in node number due to hyperparameter tuning. Binary Classifier ANNs had an input layer with 14 input nodes for 14 relevant features in data, 1 hidden layer with 14 to 56 units with leaky ReLU function, and 1 output node with a sigmoid function to predict option buyability. Price Regressor ANNs had an input layer with 14 input nodes for 14 relevant features in data, a hidden layer with 14 to 56 units with leaky ReLU function, and a second hidden layer with 7 to 28 units with leaky ReLU function, and 1 output node for final price prediction.
                    </p>
                </div>
            </div>

            {/* conclusions */}
            <section>
                <h3 className="text-xl font-bold mb-2 border-b border-white/20 pb-2">Results</h3>
                <div className="space-y-4">
                    <OptionsTable data={spxData} title="SPX Options" />
                    <OptionsTable data={spxwData} title="SPXW Options" />
                    <p>
                        Overall, our analysis revealed that the ANN model performs best for SPX Call
                        options and SPXW Put options, while the SVR model shows superior performance for SPX Put options and SPXW Call options. Despite achieving high
                        R-squared values of 0.99, the Black-Scholes Model (BSM) consistently recorded
                        the highest RMSEs and MAEs across all categories, indicating that while it explains the variance in the data reasonably well, it struggles with accuracy in
                        absolute error terms compared to the machine learning models
                    </p>

                </div>
                <div className="space-y-2">

                </div>

            </section>
            <section>
                <h3 className="text-xl font-bold mb-2 border-b border-white/20 pb-2">Conclusion</h3>
                <div className="space-y-4">
                    <p className="text-white/80">
                        Our project concludes that machine learning models hold significant potential for transforming options pricing. While traditional models like the Black-Scholes Model provide a solid foundation, they are constrained by assumptions that often fail under real market conditions.
                    </p>
                    <p className="text-white/80">
                        Machine learning models such as <span className="font-bold text-white">SVR</span>, <span className="font-bold text-white">ANN</span>, and <span className="font-bold text-white">LSTM</span> have demonstrated superior predictive power over BSM. However, these models require substantial time and computational resources to develop and are highly reliant on data quality. Overfitting and challenges in generalizing to extreme market conditions remain key concerns.
                    </p>
                    <p className="text-white/80">
                        Nonetheless, as computational power advances and data quality improves, machine learning offers promising opportunities for more accurate and adaptive pricing strategies. Future research should explore hybrid approaches that combine the strengths of traditional and machine learning models to address current limitations in financial applications.
                    </p>
                </div>
            </section>


        </div >
    )
}

