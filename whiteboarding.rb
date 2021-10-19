# # Most used word function
# words = ["the", "quick", "brown", "fox", "jumped", "over", "the", "brown", "dog", "who", "loves", "the", "monkey"]

# def most_used_word(array)
#   repeats = {}
#   index = 0
#   while index < array.length
#     if repeats[array[index]] == nil
#       repeats[array[index]] = 0
#     end
#     repeats[array[index]] += 1
#     index += 1
#   end
#   return repeats.sort_by { |_key, value| value }.reverse[0][0]
# end

# p most_used_word(words)

# # All combos with a sum of 5
# numbers = [1, 2, 3, 4]

# def combos_equal_to_five(array)
#   combos = {}
#   index1 = 0
#   index2 = 1

#   while index1 < array.length
#     while index2 < array.length
#       if array[index1] != array[index2] && array[index1] + array[index2] == 5
#         combos[array[index1]] = array[index2]
#       end
#       index2 += 1
#     end
#     index1 += 1
#     index2 = 0
#   end
#   return combos.sort_by { |_key, value| value }.reverse
# end

# p combos_equal_to_five(numbers)

# # Computing raw height data into feet and inches
# def height_to_feet_and_inches(number)
#   height = number / 12.0
#   feet = height.floor
#   inches = number.remainder(12)

#   if inches == 0
#     return { height: { feet: feet } }
#   else
#     return { height: { feet: feet, inches: inches } }
#   end
# end

# p height_to_feet_and_inches(76)

string = "Make a killer impression on whoever you’re meeting."

def sequential_bigrams(string)
  split_string = string.split(" ")

  # index = 0
  # while index < split_string.length - 1
  #   p "#{split_string[index]} #{split_string[index + 1]}"
  #   index += 1
  # end

  index1 = 0
  index2 = 0

  while index1 < split_string.length - 1
    while index2 < split_string.length
      if split_string[index1] != split_string[index2]
        p "#{split_string[index1]} #{split_string[index2]}"
      end
      index2 += 1
    end
    index1 += 1
    index2 = 0
  end
end

sequential_bigrams(string)

# Subarray Division 2

numbers = [2, 2, 1, 3, 2]

def chocolate(s, d, m)
  s_index = 0
  m_index = m - 1
  count = 0

  while m_index < s.length
    if s.slice(s_index..m_index).reduce(:+) == d
      count += 1
    end
    s_index += 1
    m_index += 1
  end
  return count
end

p chocolate(numbers, 4, 2)

# p s.slice(0..m - 1)
# p s.slice(1..m)
# p s.slice(2..m + 1)
# p s.slice(3..m + 2)

# Sales by match

numbers = [10, 20, 20, 10, 10, 30, 50, 10, 20]

def pairs(ar)
  index1 = ar.length - 1
  index2 = index1 - 1
  count = 0

  while index1 > 0
    while index2 >= 0
      if ar[index1] == ar[index2]
        count += 1
        ar.delete_at(index1)
        ar.delete_at(index2)
      end
      index2 -= 1
    end
    index1 -= 1
    index2 = index1 - 1
  end
  return count
end

p pairs(numbers)

# Migratory Birds
# Write a function
# Write each loop to store bird key and how many times each bird appears in a hash
# Sort hash by value in key/value pair
# Write if/else conditional to check if the last 2 elements of the sorted hash are equal
# If equal write additional if/else condititonal to check which key has the lower value
# return lowest key value
# Else return the last key value in the array

birds = [1, 1, 2, 2, 3, 4, 2, 2]

def bird_count(array)
  counts = Hash.new 0

  array.each do |bird|
    counts[bird] += 1
  end

  counts = counts.sort_by { |_k, v| v }

  if counts[-1][1] == counts[-2][1]
    if counts[-1][0] < counts[-2][0]
      return counts[-1][0]
    else
      return counts[-2][0]
    end
  else
    return counts[-1][0]
  end
end

p bird_count(birds)
