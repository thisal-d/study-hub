import java.util.Scanner;

public class ScannerInputLoop {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Do-while loop demonstration: validates that age > 18
        int age;
        do {
            System.out.print("Enter your age: ");
            age = sc.nextInt();
        } while (age <= 18);

        // While loop demonstration: prompts until age >= 18
        System.out.print("Enter your age: ");
        age = sc.nextInt();
        while (age < 18) {
            System.out.print("Enter your age: ");
            age = sc.nextInt(); 
        }

        sc.close();
    }
}