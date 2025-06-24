public class FinancialForecast {

    // Recursive method to calculate future value
    public static double forecast(double initialValue, double growthRate, int years) {
        if (years == 0) {
            return initialValue;
        }
        return forecast(initialValue * (1 + growthRate), growthRate, years - 1);
    }

    public static void main(String[] args) {
        double initialValue = 10000; // Starting amount
        double growthRate = 0.10;    // 10% annual growth
        int years = 5;

        double futureValue = forecast(initialValue, growthRate, years);
        System.out.printf("Forecasted Value after %d years: Rs. %.2f\n", years, futureValue);
    }
}
