def find_largest():
    arr = list(map(int, input("Enter multiple Numbers:").split()))
    largest = arr[0]
    
    for num in arr:
        if num > largest:
            largest = num
            
    return largest

finding_largest_num = find_largest()
print("The largest Number is", finding_largest_num)