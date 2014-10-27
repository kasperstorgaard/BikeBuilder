; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .service('DataCollection', function ($q, $timeout, $http) {
            return function DataCollection(filePath) {
                var self = this;

                this.filePath = filePath;
                this.items = {};
                this.fetched = false;
                this.fetching = false;

                this.fetch = fetch;
                this.getOne = getOne;
                this.getAll = getAll;
                this.updateOne = updateOne;
                this.updateAll = updateAll;
                this.add = add;
                this.processData = processData;

                window.DataCollectionSelf = window.DataCollectionSelf || self;

                //---------------------------------------------------------------------------------//

                function fetch() {
                    self.fetchedDfd = self.fetchedDfd || $q.defer();
                    if (self.fetched) {
                        self.fetchedDfd = $q.defer();
                        self.fetchedDfd.resolve();
                    } else if (!self.fetching) {
                        self.fetching = true;
                        $http.get(self.filePath).success(function (data) {
                            self.fetching = false;
                            self.fetched = true;
                            self.items = self.processData(data);
                            self.fetchedDfd.resolve(self.items);
                        });
                    }

                    return self.fetchedDfd.promise;
                }

                function processData(data) {
                    return data;
                }

                function add(key, item) {
                    if (!self.fetched) {
                        return null;
                    }

                    if (!key) {
                        return null;
                    }
                    var existing = getOne(key);
                    if (existing) {
                        return null;
                    }

                    self.items[key] = item;
                    return self.items;
                }

                function getOne(key) {
                    if (!self.fetched) {
                        return null;
                    }
                    var item = self.items[key];
                    if (item) {
                        return item;
                    }
                    return null;
                }

                function getAll() {
                    if (!self.fetched) {
                        return null;
                    }
                    return self.items;
                }

                function updateOne(key, props) {
                    if (!self.dataFetched) {
                        return null;
                    }
                    var item = self.getOne(key);
                    if (!item) {
                        return null;
                    }

                    return _.assign(item, props);
                }

                function updateAll(props) {
                    if (!self.fetched) {
                        return null;
                    }
                    _.each(self.items, function (item) {
                        _.assign(item, props);
                    });
                    return self.items;
                }
            }
        });
})();