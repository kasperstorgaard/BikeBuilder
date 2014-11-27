; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .factory('DataCollection', function ($q, $timeout, $http) {
            function DataCollection(options) {
                options = options || {};

                this.isAsync = !_.isUndefined(options.isAsync) ? options.isAsync : false;
                this.items = options.items || {};
                this.fetched = false;
                this.fetching = false;
                this.filePath = options.filePath;
            }

            DataCollection.prototype.fetch = fetch;
            DataCollection.prototype.getOne = getOne;
            DataCollection.prototype.getAll = getAll;
            DataCollection.prototype.updateOne = updateOne;
            DataCollection.prototype.updateAll = updateAll;
            DataCollection.prototype.processData = processData;
            DataCollection.prototype.add = add;
            DataCollection.prototype.addAll = addAll;

            return DataCollection;

            //---------------------------------------------------------------------------------//

            function fetch() {
                if (!this.isAsync) {
                    return null;
                }

                var self = this;
                this.fetchedDfd = this.fetchedDfd || $q.defer();

                if (this.fetched) {
                    this.fetchedDfd = $q.defer();
                    this.fetchedDfd.resolve();
                } else if (!this.fetching) {
                    this.fetching = true;
                    $http.get(this.filePath).success(function (data) {
                        self.fetching = false;
                        self.fetched = true;
                        self.items = self.processData(data);
                        self.fetchedDfd.resolve(self.items);
                    });
                }

                return this.fetchedDfd.promise;
            }

            function processData(data) {
                return data;
            }

            function add(key, item) {
                if (this.isAsync && !this.fetched) {
                    return null;
                }

                if (!key) {
                    return null;
                }
                var existing = this.getOne(key);
                if (existing) {
                    return null;
                }

                this.items[key] = item;
                return this.items;
            }

            function addAll(collection) {
                var self = this;
                if (this.isAsync && !this.fetched) {
                    return null;
                }

                if (!collection || _.size(collection) === 0) {
                    return null;
                }

                _.forEach(collection, function(item, key) {
                    self.add(key, item);
                });
                return this.items;
            }

            function getOne(key) {
                if (this.isAsync && !this.fetched) {
                    return null;
                }
                var item = this.items[key];
                if (item) {
                    return item;
                }
                return null;
            }

            function getAll() {
                if (this.isAsync && !this.fetched) {
                    return null;
                }
                return this.items;
            }

            function updateOne(key, props) {
                if (this.isAsync && !this.fetched) {
                    return null;
                }
                var item = this.getOne(key);
                if (!item) {
                    return null;
                }

                return _.assign(item, props);
            }

            function updateAll(props) {
                if (this.isAsync && !this.fetched) {
                    return null;
                }
                _.each(this.items, function (item) {
                    _.assign(item, props);
                });
                return this.items;
            }
        });
})();