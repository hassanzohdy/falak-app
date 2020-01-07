Macros.create({
    removeTag: function(index) {
        delete this.data.tags[index];

        this.data.tags = Array.reset(this.data.tags);
    },
    addTagToList: function(item) {
        if (Array.get(this.data.tags, tag => Number(tag.id) == Number(item.value))) return;

        this.data.tags.push({
            id: item.value,
            name: item.text,
        });
    },
    addNewTag: async function () {
        let tagName = this.tagsSelector.displayedText;

        this.tagsSelector.clear();

        if (!tagName) return;

        let { record } = await this.tagsService.create({
            name: tagName,
        });

        this.data.tags.push(record);
    }
});