import java.util.Arrays;
import java.util.Comparator;

public class SearchDemo {

    // Linear Search
    public static Product linearSearch(Product[] products, String target) {
        for (Product product : products) {
            if (product.productName.equalsIgnoreCase(target)) {
                return product;
            }
        }
        return null;
    }

    // Binary Search (by Product Name)
    public static Product binarySearch(Product[] products, String target) {
        int left = 0, right = products.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            int compare = products[mid].productName.compareToIgnoreCase(target);

            if (compare == 0) return products[mid];
            else if (compare < 0) left = mid + 1;
            else right = mid - 1;
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Shampoo", "Personal Care"),
            new Product(103, "T-shirt", "Apparel"),
            new Product(104, "Smartphone", "Electronics"),
            new Product(105, "Book", "Stationery")
        };

        System.out.println("== Linear Search ==");
        String targetName = "Smartphone";
        Product foundProduct = linearSearch(products, targetName);
        System.out.println(foundProduct != null ? "Found: " + foundProduct : "Not Found");

        System.out.println("\n== Binary Search ==");
        // Binary search needs sorted array
        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));
        Product foundBinary = binarySearch(products, targetName);
        System.out.println(foundBinary != null ? "Found: " + foundBinary : "Not Found");
    }
}
