import Image from "next/image"
import Link from "next/link"

export default function OptionsDetails() {
    return (
        <div className="space-y-10">
            <section>
                <p className="text-white/80">
                    Options are financial derivatives that grant buyers the right, but not the obligation, to buy or sell an asset at a predetermined price. Accurate options pricing is crucial for developing effective hedging strategies, assessing potential risks, and protecting portfolios against adverse market movements. Additionally, it creates profit opportunities by identifying mispriced options in the market. However, due to market unpredictability and the complex, non-linear relationships between features, accurately pricing options remains a significant and challenging problem.
                </p>
                <p className="text-white/80">
                    The <span className="text-accent font-bold">Black-Scholes model (BSM)</span>, is a traditionally used mathematical option pricing framework, and relies on several key assumptions—constant volatility, a log-normal distribution of asset returns, and constant interest rates. These assumptions rarely hold true in real-world markets, limiting the model&apos;s ability to generalize effectively.
                </p>
                <p className="text-white/80">
                    The inherent complexity of non-linear feature interactions in options pricing provides an opportunity to leverage machine learning (ML) models for better predictions. The ML models we employed include <span className="text-accent font-bold">Support Vector Regression (SVR)</span>, <span className="text-accent font-bold">Long Short-Term Memory (LSTM)</span> networks, and <span className="text-accent font-bold">Artificial Neural Networks (ANN)</span>.
                </p>
            </section>

            <section className="">
                <h3 className="text-xl font-bold mb-2 border-b border-white/20 pb-2">Data Set</h3>
                <p className="text-white/80 mb-4">
                    We analyzed SPX and SPXW options data, consisting of 1,021,314 rows collected at 30- to 90-minute intervals over
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
            </section>


            <section>
                <h3 className="text-xl font-bold mb-2 border-white/20 pb-2 border-b">Black Scholes Model</h3>
                <p className="text-white/80">
                    The <span className="text-accent font-bold">Black-Scholes model (BSM)</span>, developed in 1973, prices European-style options with significant and unrealistic assumptions (Constant volatility, log-normal distribution of asset returns, and assumption of constant interest rates).  <span>Insert latex formula for BSM</span>.
                </p>
                <p className="text-white/80">
                    This serves as our traditional baseline for comparison to evaluate performance improvements made by ML approaches.
                </p>

            </section>

            <section className="">
                <h3 className="text-xl font-bold mb-2 border-white/20 pb-2 border-b">Support Vector Regression (SVR)</h3>
                <p className="text-white/80">
                    <span className="text-accent font-bold">SVR</span> is an ML approach that aims to find a function that approximates the relationship between input features and output values. Limitations our group faced were exceptionally long running times with our large dataset.
                </p>
            </section>

            <div>
                <h3 className="text-xl font-bold mb-2 border-b border-white/20 pb-2">Long Short-Term Memory (LSTM)</h3>
                <section className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1 order-2 lg:order-1">
                        <p className="text-white/80">
                            The <span className="font-bold text-accent">LSTM</span> model is designed to handle data that depends on time sequences, making it effective for tasks like time-series forecasting. The key difference from traditional neural networks is that LSTM includes memory cells and gate mechanisms, letting it retain information from previous states. This &apos;memory&apos; allows the model to use historical data as context, ideally improving accuracy when predicting option prices over time.
                            <br />
                            Additionally, the structure of <span className="font-bold text-accent">LSTM</span> helps avoid issues like gradient explosion or vanishing gradients that traditional RNNs face, making it reliable for long-term sequences.
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
                        Our <span className="text-accent font-bold">LSTM</span> out performed our <span className="font-bold text-accent">SVR</span>, but was itself outperformed by our <span className="text-accent font-bold">ANN</span> approach below. Our group believes that our training data is a limiting factor in this situation, and with longer continuous time sequences of data performance will improve.
                    </p>
                </section>
            </div>

            <div>
                <h3 className="text-xl font-bold mb-2 border-b border-white/20 pb-2">Artificial Neural Network (ANN)</h3>
                <section>
                    <p className="text-white/80">
                        Our final model, the <span className="font-bold text-accent">ANN</span>, is a deep learning model comprising an input layer for data features, hidden layers for processing, and an output layer for predictions. Its adaptability lies in adjusting weights and biases via back-propagation, making it ideal for tasks like option pricing and financial modeling.
                    </p>
                </section>
                <section>
                    <p className="text-white/80">
                        Developing this model was my key contribution. Initially, a <span className="text-accent font-bold">&apos;Single-Stage ANN&apos;</span> was implemented with two hidden layers (64 and 32 nodes) and an output node for price prediction. However, this approach suffered from overfitting due to the dataset&apos;s noise, as it included numerous untraded options recorded with a closing price of zero. These zeros skewed the model and led to poor performance, necessitating a new approach.
                    </p>
                </section>
                <section className="flex flex-col md:flex-row gap-8 items-center ">
                    <div className="flex-1 order-2 lg:order-1">
                        <p className="text-white/80">
                            The most effective solution I devised was the <span className="text-accent font-bold">&apos;Two-Stage ANN&apos;</span>.
                            <br />
                            <span className="font-bold">Stage 1: Binary Classifier</span> - This stage predicts whether an option is buyable, filtering out irrelevant options (e.g., those with zero closing prices) to focus on tradable ones.
                            <br />
                            <span className="font-bold">Stage 2: Price Regressor</span> - The filtered data is used to predict the price of buyable options through regression.
                            <br />
                            By separating classification and regression, this approach improves focus, reduces overfitting, and enhances efficiency.
                        </p>
                    </div>
                    <div className="flex-1 flex justify-center items-center order-1 lg:order-2">
                        <Image
                            src="/assets/ANN_final.png"
                            alt="Hybrid ANN Model Diagram"
                            width={600}
                            height={300}
                            className="rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
                        />
                    </div>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-2 border-b border-white/20 pb-2">Results</h3>
                    <p>

                    </p>
                </section>
            </div>

            {/* conclusions */}
            <section>
                <h3 className="text-xl font-bold mb-2 border-b border-white/20 pb-2">Conclusion</h3>
                <p className="text-white/80">
                    Our research demonstrated that machine learning models, particularly the hybrid ANN approach, can
                    significantly improve options pricing accuracy compared to traditional methods. By leveraging SVR, LSTM, and
                    ANN techniques, we addressed the limitations of conventional models and captured complex market dynamics. This
                    project not only enhanced pricing accuracy but also provided valuable insights into the intricate
                    relationships between various market factors and option prices, paving the way for more sophisticated
                    financial modeling and risk management strategies.
                </p>
            </section>
        </div >
    )
}

