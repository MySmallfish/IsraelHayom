

(function (S, I) {
    I.AppController = [
            "$scope",
            "$q",
            "$window",
            "textResource",
            "$location",
            "$ionicPopup",
            "network",
            function ($scope, $q, $window, textResource, $location, $ionicPopup, network) {

                // var commands = {}, builtinCommands = {};
                var topCommands = [{
                    title: "כל הקטגוריות",
                    command: function () {
                        $location.path("/Categories");
                    }
                }, {
                    title: "פרופיל",
                    command: function () {
                        $location.path("/Profile");
                    }
                }, {
                    title: "התחבר",
                    command: function () {
                        $location.path("/Entry");
                    }
                }];

                var bottomCommands = [{
                    title: "תנאי שימוש",
                    command: function () {

                    }
                }, {
                    title: "אודות",
                    command: function () {

                        var myPopup = $ionicPopup.show({
                            templateUrl: 'app/common/views/about.html',
                            title: 'אודות',
                            scope: $scope,
                            buttons: [
                              { text: 'סגור' }
                            ]
                        });
                        myPopup.then(function (res) {
                            console.log('Tapped!', res);
                        });

                    }
                }];

                $scope.executeCommand = function (command) {
                    if (commands) {
                        var commandHandler = commands[command];
                        if (typeof commandHandler === "undefined") {
                            throw new Error("Command not supported: " + command);
                        } else if (_.isFunction(commandHandler)) {

                            return commandHandler(args);
                        } else {
                            executeBuiltinCommand(commandHandler, args);
                        }
                    } else {
                        throw new Error("Command not supported: " + command + ", no command was registered");
                    }
                };


                $scope.setupCommands = function (childCommands) {
                    commands = childCommands;
                };

                function executeBuiltinCommand(commandInfo, item) {
                    var commandHandler = builtinCommands[commandInfo.type];
                    // if exist...
                    var args = commandInfo.getArguments(item);

                    commandHandler(args);
                }


                function stop() {
                    event.stopPropagation();
                };

                function setHeader(info) {
                    return function () {
                        $scope.changeHeader(info);
                    };
                }


                function changeHeader(info) {
                    if (typeof info == "string") {
                        info = { header: info };
                    }

                    _.extend($scope, {
                        header: textResource.get(info.header),
                        commands: {
                            back: info.back,
                            home: info.home,
                            logout: info.logout
                        }
                    });

                    return $q.when(info);
                }

                function onNetworkStatusChanged() {
                    $scope.isOnline = network.isOnline();
                }

                function onProgressStarted() {
                    $scope.isInProgress = true;
                }

                function onProgressCompleted() {
                    $scope.isInProgress = false;
                }

                function notifyProgressStarted(context) {

                    $scope.$root.$broadcast("progress-started");
                    $scope.$root.isInProgress = true;
                    return $q.when(context);
                }

                function notifyProgressCompleted() {
                    $scope.$root.isInProgress = false;
                    $scope.$root.$broadcast("progress-completed");
                }

                function refresh() {
                    $scope.$root.$broadcast("SimplyLog.RefreshRequired");
                }


                function onRouteChangeSuccess(event, next) {
                    changeHeader("");
                    if (next && next.locals) {
                        $scope.$root.pageInfo = next.locals.pageInfo;
                    }
                }

                function bind(name, handler) {
                    $scope.$root.$on(name, handler);
                }

                function bindEvents() {
                    bind("Simple.NetworkStatusChanged", onNetworkStatusChanged);
                    bind("progress-started", onProgressStarted);
                    bind("progress-completed", onProgressCompleted);
                    bind("$routeChangeSuccess", onRouteChangeSuccess);
                }

                function logError(e) {
                    console.error("Uncaught Error", e);
                }

                function goBack() {
                    $window.history.back();
                };
                function goHome() {
                    $location.path("/");
                };

                _.extend($scope, {
                    changeHeader: changeHeader,
                    setHeader: setHeader,
                    stop: stop,
                    //logout: logout,
                    //navigateToLogin: navigateToLogin,
                    refresh: refresh,
                    notifyProgressStarted: notifyProgressStarted,
                    notifyProgressCompleted: notifyProgressCompleted,
                    logError: logError,
                    goBack: goBack,
                    goHome: goHome
                });

                onNetworkStatusChanged();
                bindEvents();


            }];


})(Simple, IsraelHayom);