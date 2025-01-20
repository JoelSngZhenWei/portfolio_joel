import Image from "next/image"

export default function OptionsDetails() {
    return (
        <div className="space-y-10">
            <section>
                <p className="text-white/80">
                    The challenge in options pricing lies in accurately predicting the fair value of options contracts.
                    Traditional models often struggle with complex, non-linear market relationships. Our project leveraged
                    advanced machine learning techniques to improve the accuracy and reliability of options pricing models.
                </p>
            </section>

            <section>
                <h3 className="text-lg font-bold mb-4">Black Scholes Model</h3>
                <p className="text-white/80">
                    The Black-Scholes model, developed in 1973, prices European-style options assuming geometric Brownian motion
                    of asset prices. Despite its revolutionary impact, the model&apos;s limitations include assumptions of constant
                    volatility and risk-free rates. Our project addressed these shortcomings using machine learning approaches.
                </p>
            </section>

            <section className="">
                <h3 className="text-lg font-bold mb-4">Support Vector Regression (SVR)</h3>
                <p className="text-white/80">
                    We employed Support Vector Regression to capture non-linear relationships in options pricing data. SVR&apos;s
                    ability to handle high-dimensional feature spaces made it suitable for incorporating multiple pricing factors.
                    Our implementation showed improved accuracy over traditional models, especially in non-standard market
                    conditions.
                </p>
            </section>

            <div>
                <h3 className="text-lg font-bold mb-4">Long Short-Term Memory (LSTM)</h3>
                <section className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1">
                        <p className="text-white/80">
                            LSTM networks were used to capture temporal dependencies in options pricing. Their ability to remember or
                            forget information over long sequences made them ideal for modeling time-series financial data. Our LSTM
                            model effectively incorporated historical price movements and volatility patterns, showing significant
                            improvements in pricing accuracy, especially for options with longer time horizons.
                        </p>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <Image
                            src="/assets/LSTM.png"
                            alt="LSTM Model Architecture"
                            width={400}
                            height={300}
                            className="rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
                        />
                    </div>
                </section>
            </div>

            <div>
                <h3 className="text-lg font-bold mb-4">Artificial Neural Network (ANN)</h3>
                <section className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1">
                        <p className="text-white/80">
                            Our project culminated in a hybrid ANN approach, combining classification and regression techniques. This
                            model first categorized options based on moneyness and time to maturity, then applied specialized regression
                            models for each category. The result was a highly adaptive model demonstrating superior performance across
                            various option types and market scenarios, opening new avenues for risk management and trading strategies.
                        </p>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <Image
                            src="/assets/ANN_final.png"
                            alt="Hybrid ANN Model Diagram"
                            width={600}
                            height={300}
                            className="rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
                        />
                    </div>
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
        </div>
    )
}

