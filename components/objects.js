/**
 * Fill out the logic for the methods on this class so that they
 * pass the tests (run "npm run test:objects" from the command line to test).
 */
class ObjectDrills {
    /**
     * Takes in one parameter (object) and returns it
     */
    identity(obj) {
        return obj;
    }

    /**
     * Takes in two parameters (string and an object in that order), returns
     * the value of the object corresponding to the string. The string
     * passed in represents an individual property on the object.
     *
     * @example value('name', { name: 'John', age: 57 }) -> 'John'
     */
    value(str, obj) {

        return obj[str];
    }

    /**
     * Takes in one parameter (object), returns the number of properties
     * that the object has.
     *
     * @example length({ name: 'John', age: 57 }) -> 2
     */
    length(obj) {
        return Object.keys(obj).length;
    }

    /**
     * Takes in one parameter (object), returns an array of the properties
     * on the object.
     *
     * @example keys({ name: 'John', age: 57 }) -> ['name', 'age']
     */
    keys(obj) {
        return Object.keys(obj);
    }

    /**
     * Takes in one parameter (object), returns an array of the values
     * on the object.
     *
     * @example keys({ name: 'John', age: 57 }) -> ['John', 57]
     */
    values(obj) {
        return Object.values(obj);
    }

    /**
     * Takes in two parameters (string and object in that order), return
     * true if the object has a property with the specified string.
     *
     * @example hasProperty('name', { name: 'John', age: 57 }) -> true
     */
    hasProperty(str, obj) {
        return obj.hasOwnProperty(str);
    }

    /**
     * Takes in two parameters (both objects), merges the first object into
     * the second object. If property names conflict, the properties from
     * the second object are used.
     *
     * @example merge({ name: 'John', age: 57 }, { phone: '5555555555' }) -> { name: 'John', age: 57, phone: '5555555555' }
     * @example merge({ name: 'John', age: 57 }, { name: 'Jane', phone: '5555555555' }) -> { name: 'Jane', age: 57, phone: '5555555555' }
     */
    merge(obj1, obj2) {
        return Object.assign(obj1, obj2);
    }

    /**
     * Takes in two parameters (string and an object in that order),
     * returns the value corresponding to the string. The string
     * passed in is a path to a value in the object. If the string path is
     * not found in the object, returns undefined.
     *
     * @example get('address.city', { address: { city: 'Atlanta' } }) -> 'Atlanta'
     */
    get(str, obj) {
        // Object.byString = function (o, s) {
        //     s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
        //     s = s.replace(/^\./, '');           // strip a leading dot
        //     var a = s.split('.');
        //     for (var i = 0, n = a.length; i < n; ++i) {
        //         var k = a[i];
        //         if (k in o) {
        //             o = o[k];
        //         } else {
        //             return;
        //         }
        //     }
        //     return o;
        // }
        let strArr = str.split('.');
        for (let i = 0; i < strArr.length; i++) {
            let k = strArr[i];
            if (k in obj) {
                obj = obj[k];
            } else {
                return;
            }
        }

        return obj;
        // return Object.byString(obj, str);
    }

    /**
     * Takes in two parameters (string and object in that order), returns
     * a new object with the property represented by the string removed
     *
     * @example omit('name', { name: 'John', age: 57 }) -> { age: 57 }
     */
    omit(str, obj) {
        delete obj[str];
        return obj;
    }

    /**
     * Takes in two parameters (array of strings and object in that order),
     * returns a new object with all the properties in the array removed
     *
     * @example omitAll(['name', 'phone'], { name: 'John', age: 57, phone: '5555555555' }) -> { age: 57 }
     */
    omitAll(strArr, obj) {

        for (let i = 0; i < strArr.length; i++) {
            this.omit(strArr[i], obj);
        }

        return obj;
    }

    /**
     * Takes in one parameter (object), returns an array of arrays. Each
     * internal array has two values, the first represents the property
     * name and the second represents the property value.
     *
     * @example toPairs({ name: 'John', age: 57 }) -> [['name', 'John'], ['age', 57]]
     */
    toPairs(obj) {
        let results = Object.keys(obj).map(function (key) {
            return [key, obj[key]];
        });
        return results;
    }
}

module.exports = new ObjectDrills();
