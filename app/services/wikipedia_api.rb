require 'httparty'

class WikipediaApi

  def initialize
  end

  # Coordinates all the methods to get titles of recently updated wikipedia articles
  def latest_changes
    request_params = wiki_serach_params
    response = make_request(request_params)
    parsed_response = parse_response(response)
    recent_changes_titles = filter_titles(parsed_response)
  end

  # Retunrs wikipedia api search params
  def wiki_serach_params
    {:action => 'query', :list => 'recentchanges', :rcprop => 'title', :format => 'json'}.to_query
  end

  # Uses HTTParty REST client to hit the wikipedia api
  def make_request(request_params)
    HTTParty.get("https://en.wikipedia.org/w/api.php?#{request_params}")
  end

  # Parses json response returned from wikipedia API
  def parse_response(jsonRes)
    JSON.parse(jsonRes.body)['query']['recentchanges']
  end

  # Returns an array of titles from the parsed json data
  def filter_titles(responses)
    responses.map { |a| a["title"] }
  end

end
