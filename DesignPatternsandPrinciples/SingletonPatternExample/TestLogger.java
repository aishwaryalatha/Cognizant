public class TestLogger {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        logger1.log("Application started");

        Logger logger2 = Logger.getInstance();
        logger2.log("Application is running");

        // Check if both logger1 and logger2 refer to the same instance
        if (logger1 == logger2) {
            System.out.println("Both loggers are the same instance (Singleton confirmed)");
        } else {
            System.out.println("Different instances (Singleton failed)");
        }
    }
}
