/**
 * Created by Sufiyan Bawany on 5/20/2017.
 */
// Include app dependency on ngMaterial

angular.module( 'YourApp', [ 'ngMaterial' ] )

    .controller('MyCtrl',function($scope){

            $scope.submitEmail = function (user) {

                var data = {
                    name: user.name,
                    email: user. email

                };

                console.log(data)
            }




    })





