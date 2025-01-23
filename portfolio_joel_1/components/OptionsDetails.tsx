import Image from "next/image"
import Link from "next/link"

export default function OptionsDetails() {
    return (
        <div className="space-y-10">
            <section>
                <p className="text-white/80">
                    Options are financial derivatives that allow buyers to <Link href={'https://www.investopedia.com/terms/o/option.asp'}>blah blah blah</Link>. Accurate options pricing informs heding strategies by assessing potential risk in holding options and protecting portolios against adverse market moves, and represent key profit opportunities by revealing mispriced options in the market. As such, determining the fair value of options is a compelling problem statement. However, due to market unpredictability and complex and non-linear feature relationships, this is a notoriously difficult problem statement.
                </p>
                <p className="text-white/80">
                    The Black-Scholes model (BSM) is a widely used option pricing model that carries significant assumptions (Constant volatility, log-normal distribution of asset returns, and assumption of constant interest rates) that do not hold in a real options market, and hence cannot generalise well to the options market.
                </p>
                <p className="text-white/80">
                    The complexity of non-linear feature relationships presents an opportunity to use ML to model and predict options prices. The ML models we used are Support Vector Regression (SVR), Long Short Term Memory Recurrent Neural Networks (LSTM), and Artificial Neural Networks (ANN).
                </p>
            </section>

            <section>
                <h3 className="text-lg font-bold mb-4">Data Set</h3>
                <p className="text-white/80">
                    We analysed SPX and SPXW options data, with a total of 1&apos;021&apos;314 rows collected at intervals of 30 to 90 minutes from 6 trading days over a period of 4 months from July 2024 to October 2024. Our EDA exposed 3 key findings from our data:
                </p>
                <ul className="text-white/80">
                    <li>
                        There are complex and non-linear relationships between features that are difficult to predict.
                    </li>
                    <li>
                        The market is cautiously bullish.
                    </li>
                    <li>
                        The market over the period we observe is generally stable.
                    </li>
                </ul>
                <p className="text-white/80">
                    Observation 1 indicates that this is a problem that machine learning has high potential to address. Observation 2 and 3 indicate that the market over the period we observe is overall stable, making it a good fit for training our data.
                </p>
                <p className="text-white/80">
                    Our source was the <Link href={'https://www.cboe.com/data'}>Chicago Board Options Exchange</Link>.
                </p>
            </section>

            <section>
                <h3 className="text-lg font-bold mb-4">Black Scholes Model</h3>
                <p className="text-white/80">
                    The Black-Scholes model (BSM), developed in 1973, prices European-style options with significant and unrealistic assumptions (Constant volatility, log-normal distribution of asset returns, and assumption of constant interest rates).  <span>Insert latex formula for BSM</span>.
                </p>
                <p className="text-white/80">
                    This serves as our traditional baseline for comparison to evaluate performance improvements made by ML approaches.
                </p>

            </section>

            <section className="">
                <h3 className="text-lg font-bold mb-4">Support Vector Regression (SVR)</h3>
                <p className="text-white/80">
                    SVR is an ML approach that aims to find a function that approximates the relationship between input features and output values. Limitations our group faced were exceptionally long running times with our large dataset.
                </p>
            </section>

            <div>
                <h3 className="text-lg font-bold mb-4">Long Short-Term Memory (LSTM)</h3>
                <section className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1 order-2 lg:order-1">
                        <p className="text-white/80">
                            The LSTM model is designed to handle data that depends on time sequences, making it effective for tasks like time-series forecasting. The key difference from traditional neural networks is that LSTM includes memory cells and gate mechanisms, letting it retain information from previous states. This &apos;memory&apos; allows the model to use historical data as context, ideally improving accuracy when predicting option prices over time.
                            <br />
                            Additionally, the structure of LSTM helps avoid issues like gradient explosion or vanishing gradients that traditional RNNs face, making it reliable for long-term sequences.
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
                        Our LSTM out performed our SVR, but was outperformed by our ANN approach below. Our group believes that our training data is a limiting factor in this situation, and with longer continuous time sequences of data performance will improve.
                    </p>
                </section>
            </div>

            <div>
                <h3 className="text-lg font-bold mb-4">Artificial Neural Network (ANN)</h3>
                <section>
                    <p className="text-white/80">
                        The final model our group employed was the ANN, a well established deep learning model. A feedforward ANN is composed of three primary components: an input layer that represents the features of the data, one or more hidden layers that process information through interconnected neurons, and an output layer that delivers the predicted outcome. The architecture&apos;s adaptability stems from its ability to modify weights and biases during training via back-propagation, a gradient-based optimization technique. ANNs are particularly advantageous in tasks that require learning from large datasets and capturing intricate, nonlinear dynamics, such as option pricing and
                        other financial modeling tasks.
                    </p>
                </section>
                <section>
                    <p className="text-white/80">
                        Development of this model was one of my personal contributions to the project. Initially a &apos;Single-Stage ANN&apos; was developed, which took in input features from the data set, with 2 hidden layers of 64 and 32 nodes respecitvely, and a final node for predicting the option price.
                        <br />
                        This approach was limited and displayed exceptionally poor performance, particularly a high degree of overfitting. This is due to the nature of our data set, which consisted of a callbook of options data. This dataset documents all available options at specific points during the trading
                        day, including those that were not traded. For options that were traded, the dataset recorded the corresponding closing price, while for untraded options, a value of zero was recorded as the closing price. The abundance of zero values,
                        due to the non purchased options, introduced a significant amount of noise into the data. This not only skewed the model&apos;s performance but also led to an overrepresentation of zero values. A different approach was required.
                    </p>
                </section>
                <section className="flex flex-col md:flex-row gap-8 items-center ">
                    <div className="flex-1 order-2 lg:order-1">
                        <p className="text-white/80">
                            The final and most effective approach I developed was what my group termed the <span className="text-accent font-bold">&apos;Two-Stage ANN&apos;</span>.
                            Stage 1: Binary Classifier. The first stage of the refined model focuses on a binary classification task, where
                            the model is trained to predict whether an option is likely to be buyable. In the context of our data, an option is considered buyable if it has a significant probability of being purchased. This stage helps filter out options that are unlikely to be traded, based on historical data and certain features that may indicate whether an option is typically exercised. By classifying options as either buyable or not buyable, this stage serves to pre-process the data by eliminating options with no real trading potential (those with a closing price of zero, for example). Only rows of data that are identified as buyable move forward to the second stage for price prediction, ensuring that the model focuses only on relevant data and avoids training on unpurchased options.
                            Stage 2: Price Regressor. In the second stage, the ANN model conducts a regression task specifically for the buyable options identified in Stage 1. The goal of this stage is to predict the price of each option that is classified as likely to be exercised. This involves taking the features of the options that passed through the first stage and using them to predict the continuous value of the option&apos;s price.
                            By separating the classification and regression tasks into two distinct stages, the model is able to learn more effectively, with the first stage helping to filter the data and the second stage focusing solely on price prediction for options that are most relevant. This approach mitigates the problem of overfitting to irrelevant data, as the training process is now more focused and efficient.
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
                    <p>

                    </p>
                </section>
            </div>

            {/* conclusions */}
            <section>
                <h3 className="text-lg font-bold mb-4">Conclusion</h3>
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

