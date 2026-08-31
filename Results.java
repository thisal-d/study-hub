import java.util.Scanner;

public class Results {
    public static void main(String[] args) {
        System.out.print("Enter your marks: ");
        Scanner sc = new Scanner(System.in);
        int marks = sc.nextInt();
        while (marks < 0 || marks > 100) {
            System.out.print("Enter a valid mark: ");
            marks = sc.nextInt();
        }

        if (marks > 75)
            System.out.println("A Pass");
        else if (marks <= 75 && marks > 65)
            System.out.println("B Pass");
        else if (marks <= 65 && marks > 45)
            System.out.println("C Pass");
        else
            System.out.println("Fail");
    }
}
