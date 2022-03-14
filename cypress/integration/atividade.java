package cypress.integration;

import java.util.Scanner;
import java.util.ArrayList;
public class atividade {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int valor=0;
        int a=0,b=0,c=0,d=0,e=0,f=0;
        int resultado=0;
        int[] carrinho = new int[6];

        System.out.println("\tMENU DE OPÇÕES\n1-Senhor dos Anéis(fantasia) 45,00\n2-As Branquelas(comédia) 55,00\n3-Velozes e Furiosos 7(Ação) 100,00\n4-Velozes e Furiosos 6(Ação) 55,00\n5-The Scapegoat(drama) 100,00\n6-Meu Malvado Favorito(animação) 200,00\n");
        
        for(int i = 0; i< 6; i++){
            System.out.println("Escolha o que deseja:");
            valor = entrada.nextInt();
            carrinho[i] = valor;

            if(carrinho[i] == 1){ //senhor dos anéis
                a++;
            }else if(carrinho[i] == 2){ //as branquelas
                b++;
            }else if(carrinho[i] == 3){ //velozes e furiosos 7
                c++;
            }else if(carrinho[i] == 4){ //velozes e furiosos 6
                d++;
            }else if(carrinho[i] == 5){ //the scapegoat
                e++;
            }else if(carrinho[i] == 6){ //meu malvado favorito
                f++;
            }

            
            resultado = ((a*45)+(b*55)+(c*100)+(d*55)+(e*100)+(f*200));
        }

        System.out.println(resultado);
}
}