#include <iostream>
#include <cstring>

int strl(char* str) {
	
	int i = 0;

	while (str[i] != '\0') {
  		i++;
	};

	return i;

};


char* strl1(char* str) {

		char newStr;
	for (int i = 0; i < strlen(str)/2; i++) {
  		 newStr = str[i];
		str[i] = str[strlen(str) - 1 - i];
		str[strlen(str) - 1 - i] = newStr;

	};

	return str;

}

int main() {
	char x[] = "Tigran";
	std::cout << strl(x) << std::endl; 
	std::cout << strl1(x) << std::endl;

};
