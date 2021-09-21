function maiorNome(name) {
    mName = name[0];
    for (i in name) {
        if (name[i].length > mName.length) {
            mName = name[i];
        }
    }
    return mName;
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
