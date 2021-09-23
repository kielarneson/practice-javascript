words = ["the", "quick", "brown", "fox", "jumped", "over", "the", "brown", "dog", "who", "loves", "the", "monkey"]

def most_used_word(array)
  repeats = {}
  index = 0
  while index < array.length
    if repeats[array[index]] == nil
      repeats[array[index]] = 0
    end
    repeats[array[index]] += 1
    index += 1
  end
  return repeats.sort_by { |_key, value| value }.reverse[0][0]
end

p most_used_word(words)
