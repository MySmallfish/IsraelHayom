(function (S, I) {
    I.AppController = [
            "$scope",
            "$q",
            "$window",
            "textResource",
            "$location",
            "$ionicPopup",
            "$filter",
            "network",
            function ($scope, $q, $window, textResource, $location, $ionicPopup, $filter, network) {




                var commands = {}, builtinCommands = {
                    "popup": openPopup,
                    "DisplayAbout": displayAbout,
                    "NavigateToAllCategories": navigateToAllCategories,
                    "NavigateToProfile": navigateToProfile,
                    "Login": login,
                    "DisplayTerms": displayTerms

                };

                function displayTerms() {
                    $ionicPopup.show({
                        templateUrl: 'app/common/views/terms.html',
                        title: $filter("l10n")(" Terms"),
                        scope: $scope,
                        buttons: [
                          { text: $filter("l10n")("Close") }
                        ]
                    });
                }

                function login() {
                    $location.path("/Login");
                }

                function navigateToProfile() {
                    $location.path("/Profile");
                }

                function navigateToAllCategories() {
                    $location.path("/Categories");
                }

                function displayAbout() {
                    var myPopup = $ionicPopup.alert({
                        templateUrl: 'app/common/views/about.html',
                        scope: $scope,
                        buttons: [
                          { text: $filter("l10n")("Close") }
                        ]
                    });
                    myPopup.then(function (res) {
                        console.log('Tapped!', res);
                    });

                }


                $scope.executeCommand = function (command, args) {
                    if (commands) {
                        var commandName = _.isString(command) ? command : command.commandName,
                            commandHandler = commands[commandName] || builtinCommands[commandName];

                        args = command.getArguments ? command.getArguments(args) : args;

                        if (typeof commandHandler === "undefined") {
                            throw new Error("Command not supported: " + commandName);
                        } else if (_.isFunction(commandHandler)) {
                            return executeCommandHandler(commandHandler, args);
                        } else if (_.isFunction(commandHandler.handler)) {
                            return executeCommandHandler(commandHandler.handler, args);
                        }
                    } else {
                        throw new Error("Command not supported: " + command + ", no command was registered");
                    }
                };

                $scope.setupCommands = function (childCommands) {
                    commands = childCommands;
                };

                $scope.setupContextMenuCommands = function (childCommands) {
                    var contextCommands;
                    if (childCommands) {
                        contextCommands = _.union($scope.topCommands, childCommands, $scope.bottomCommands);
                    } else {
                        contextCommands = _.union($scope.topCommands, $scope.bottomCommands);
                    }
                    $scope.contextMenuCommands = contextCommands;
                };


                function openPopup(options) {
                    var defaultOptions = {};

                    options = _.defaults(options || {}, defaultOptions);

                    $modal.open(options);

                }

                function executeCommandHandler(commandHandler, args) {
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

                function getLastUpdate() {
                    $scope.lastUpdate = $("meta[name=lastUpdate]").attr("content");
                }

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
                    goHome: goHome,
                    getLastUpdate: getLastUpdate
                });

                onNetworkStatusChanged();
                bindEvents();
                getLastUpdate();


            }];


})(Simple, IsraelHayom);