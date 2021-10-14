require_relative "blackjack"

# Making new deck
deck = Deck.new
# Shuffling new deck
deck.shuffle

index = 0
while index < 1
  # Making player hand
  player_hand = Hand.new
  # Making dealer hand
  dealer_hand = Hand.new

  # Dealing cards one card at a time
  puts "Dealing player card 1"
  player_hand.cards << deck.deal_card
  puts "Dealing dealer card 1, face down"
  dealer_hand.cards << deck.deal_card
  puts "Dealing player card 2"
  player_hand.cards << deck.deal_card
  puts "Dealing dealer card 2"
  dealer_hand.cards << deck.deal_card
  puts ""

  # Specifying card order
  player_first_card = player_hand.cards[0]
  player_second_card = player_hand.cards[1]
  dealer_first_card = dealer_hand.cards[0]
  dealer_second_card = dealer_hand.cards[1]

  # If either card is an ace set the ace's value to 11
  if player_hand.cards.length == 2 && player_first_card.name == :ace
    player_first_card.value = 11
  elsif player_hand.cards.length == 2 && player_second_card.name == :ace
    player_second_card.value = 11
  elsif dealer_hand.cards.length == 2 && dealer_first_card.name == :ace
    dealer_first_card.value = 11
  elsif dealer_hand.cards.length == 2 && dealer_second_card.name == :ace
    dealer_second_card.value = 11
  end

  # Displaying game information
  puts "PLAYERS HAND: #{player_first_card.name} of #{player_first_card.suit} and #{player_second_card.name} of #{player_second_card.suit}"
  puts "PLAYER TOTAL: #{player_first_card.value + player_second_card.value}"
  puts "DEALER SHOWING: #{dealer_second_card.name} of #{dealer_second_card.suit}"
  puts "DEALER TOTAL: #{dealer_second_card.value}"
  puts ""

  index += 1
end
