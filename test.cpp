#include <iostream>

int fib(int n) {
	if(n <= 0) {
		return 0;
	} else if(n == 1) {
		return 1;
	}

	return fib(n - 1) + fib(n - 2);
};

int cache[100] = {0};

int fibCache(int n) {
	if(n <= 0) {
    	return 0;
  } else if (n == 1) {
    return 1;
 }

	if(!cache[n]) {
		cache[n] = fibCache(n - 1) + fibCache(n - 2);
	};

	return cache[n];
}

int main() {

	std::cout << fib(5) << std::endl;
	std::cout << fibCache(6) << std::endl;

	return 0;
};


