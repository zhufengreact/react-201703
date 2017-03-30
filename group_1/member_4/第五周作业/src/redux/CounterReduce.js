export default (data, action) => {
    switch (action.type) {
        case 'click':
            let newdata = {};
            data.items.forEach((item) => {
                if (item.id === action.id) {

                    item.img = 'hit';
                }
            });
            Object.assign(newdata, data);
            return newdata;
        case 'witch':
            let id = 1;
            let num = Math.floor(Math.random() * 10);
            if (num !== 0) {
                id = num;
            }
            let newdata2 = {};
            data.items.forEach((item) => {
                if (item.id === id && item.img === 'init') {
                    item.show = true;
                } else {
                    item.show = false;
                }
            });
            data.begin = true;
            Object.assign(newdata2, data);
            return newdata2;
        case 'stop':

        default:
            return data;
    }
}
