require 'test_helper'

class QuoteTest < ActiveSupport::TestCase

	test "unique_tag" do
		quote = Quote.create(:author => 'Danny Nathan', :saying => 'You only yolo once. Then you realize how stupid you look for using "yolo."')
		expected = 'DN#' + quote.id.to_s
		actual = quote.unique_tag
		assert_equal expected, actual
	end


end
