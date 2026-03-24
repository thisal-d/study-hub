import java.util.Scanner;
class Main{
    public static void main(String[] a){
        Scanner sc = new Scanner(System.in);

        do{
            System.out.print("Enter your age: ");
            int age = sc.nextInt();
        } while (age <= 18);



        System.out.print("Enter your age: ");
        int age = sc.nextInt();
        while (age < 18){
            System.out.print("Enter your age: ");
            age = sc.nextInt(); 
        }
    }
}