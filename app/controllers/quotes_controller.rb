class QuotesController < ApplicationController
	# def index
	# 	@quote = Quote.order("RANDOM()").first
	# end

	def index
		@quote = Quote.order('id DESC').all
	end

	def create
		@quote = Quote.create(quote_params)
		if @quote.invalid?
			flash[:error] = '<strong>Could not save!</strong> The data you entered is invalid.'
		else 
			flash[:notice] = '<strong>Thanks for your submission!</strong>'
		    $client.update("#YKYWAASW #{@quote.saying} -#{@quote.author}")
		end
		redirect_to root_path
	end

	def show
		@quote = Quote.where(:id => params[:id]).first
		if @quote.blank?
			render :text => "Not Found", :status => :not_found
		end
		respond_to do |format|
			format.html
			format.json {render json: @quote}
		end
	end


	def about
	end


	private


	def quote_params
		params.require(:quote).permit(:saying, :author)
	end


end
