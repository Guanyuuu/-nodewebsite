// 拿取首页全部的数据
export default async function Request(url) {

    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (err) {
        console.log(err);
    }

}