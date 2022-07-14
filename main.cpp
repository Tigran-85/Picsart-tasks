#include <iostream>
#include <cstring>
#include <cstdio>
#define N 3

char* strcat(char* s1, char* s2){
		int len1 = strlen(s1);

	for(int i = 0; i <= strlen(s2); ++i){

		 s1[len1 + i] = s2[i];
	};
	
	return s1;
}

char* strset(char* s, char ch) {
	 for(int i = 0; i < strlen(s); ++i){
   
           s[i] = ch;
	 };

	return s;
}


char* strmove(char* s, int n) {
	
	while(n){
		int temp;
		int len = strlen(s);
		temp = s[len - 1];	
		for(int i = len - 1; i > 0; i--){
			s[i] = s[i - 1];
		};

		s[0] = temp;

		n--;
	}

	return s;

}


int main() {
		char x[] = "hello";
		char y[] = "Poghosyan";
		char z = 'x';
		int num = 2;
		
		//std::cout << strcat(x, y) << std::endl;
		//std::cout << strset(x, z) << std::endl;
		std::cout << strmove(x, num) << std::endl;
}
