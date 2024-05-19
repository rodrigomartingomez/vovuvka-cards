const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => {
        const key = item.replace('./', '').replace('.png', '');
        images[key] = r(item);
    });
    return images;
}

const images = importAll(require.context('../assets', false, /\.png$/));

export default images;