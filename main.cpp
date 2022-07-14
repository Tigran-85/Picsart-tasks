#include <iostream>
#include <cstring>
#include <cstdio>

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
	char first = s[0];
	char sec = 0;
	char third = 0;
	char sCopy[] = "hello";

for(int i = 0; i < strlen(s); ++i){

		if(!s[i + n]) {
			for(int j = 0; j < n; ++j) {
				s[j] = sCopy[strlen(sCopy) - (j + 1)]; 
			}	
			return s;
		}

		s[i + n] = sCopy[i + (n - 1)];

};
	return s;

}

int main() {
		char x[] = "hello";
		char y[] = "Poghosyan";
		char z = 'x';
		int num = 1;
		
		//std::cout << strcat(x, y) << std::endl;
		//std::cout << strset(x, z) << std::endl;
		std::cout << strmove(x, num) << std::endl;
}
