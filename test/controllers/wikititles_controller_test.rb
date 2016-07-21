require 'test_helper'

class WikititlesControllerTest < ActionController::TestCase
  test "should get angular" do
    get :angular
    assert_response :success
  end

end
