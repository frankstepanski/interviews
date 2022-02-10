# This is a demo task.

# Write a function:

# def solution(A)

# that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

# For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

# Given A = [1, 2, 3], the function should return 4.

# Given A = [−1, −3], the function should return 1.

# Write an efficient algorithm for the following assumptions:

# N is an integer within the range [1..100,000];
# each element of array A is an integer within the range [−1,000,000..1,000,000].


def solution(A):

    A.sort()

    if (A[0] > 0):
        if A[0] == 1:
            counter = 1
        else:
            return 1
    else:
        counter = 0

    finalNumber = 0
    for num in A:
        # if num is less than counter it is less than 1
        # so we want to keep going to next number
        if num < counter:
            pass
        # if they are equal go to next num
        elif num == counter:
            pass
        # if the num is not equal but equal to next counter
        # then just move to next counter
        elif num == counter+1:
            counter = counter + 1
        # if the num is not equal to counter or next counter
        # save the counter value in finalNumber and move to next counter
        else:
            counter = counter + 1
            finalNumber = counter
            break

    # means that their is only negative nums.
    if counter == 0:
        return 1
    # means we didnt find a missing number
    elif finalNumber == 0:
        return len(A) + 1
    # we found the missing integer.
    else:
        return finalNumber

A = [1, 3, 6, 4, 1, 2] # return 5.

print(solution(A))

A1 = [1, 2, 3] # return 4.

print(solution(A1))


A2 = [-1, -3]
print(solution(A2)) # return 1.

print ("answer 3 =",solution([4, 1, 5, 6, 2]))