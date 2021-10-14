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

  index += 1
end
