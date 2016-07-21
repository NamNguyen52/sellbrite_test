class WikititlesController < ApplicationController
  def angular
    render 'layouts/application'
  end

  def latest_updates
    wiki_api = WikipediaApi.new
    respond_with wiki_api.latest_changes
  end
end
