
public class Logger {
    // Step 1: Private static instance (only one copy)
    private static Logger instance;

    // Step 2: Private constructor (so no other class can instantiate)
    private Logger() {
        System.out.println("Logger instance created");
    }

    // Step 3: Public method to return the single instance
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();  // Lazy initialization
        }
        return instance;
    }

    // Example logging method
    public void log(String message) {
        System.out.println("[LOG]: " + message);
    }
}

