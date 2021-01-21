let initapi = []

export default function reqData(pre = initapi, action) {
    // console.log('reducer------调用了', action);
    const { type, data } = action
    switch (type) {
        case ('handlePublish'):
            return data


        default:
            return pre
    }
}