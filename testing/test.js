const html = `
<div class="message-post" id="" style="color: rgb(50, 50, 50);">
    <img class="" id="" alt="bot" src="/dist/images/icon_bot.svg?rev=3a9113a7cbb03cb69db7" width="20" height="20">
        <span class="" id="">
        <span class="semibold" style="word-break:break-all;color:#E09742">Ledah</span> gave bank 
        <img src="/dist/images/card_grain.svg?rev=b72852bcde4c00a5f809" alt="grain" height="20" width="14.25" class="lobby-chat-text-icon">
        <img src="/dist/images/card_grain.svg?rev=b72852bcde4c00a5f809" alt="grain" height="20" width="14.25" class="lobby-chat-text-icon">
        <img src="/dist/images/card_grain.svg?rev=b72852bcde4c00a5f809" alt="grain" height="20" width="14.25" class="lobby-chat-text-icon">
        <img src="/dist/images/card_grain.svg?rev=b72852bcde4c00a5f809" alt="grain" height="20" width="14.25" class="lobby-chat-text-icon"> and took 
        <img src="/dist/images/card_brick.svg?rev=4beb37891c6c77ebb485" alt="brick" height="20" width="14.25" class="lobby-chat-text-icon">

        </span>
</div>
`

        // Find the text after 'and took'
        const afterTookIndex = html.indexOf('and took') + 'and took'.length;
        const textAfterTook = html.substring(afterTookIndex);

        // Find the text between 'gave bank' and 'and took'
        const startIndex = html.indexOf('gave bank') + 'gave bank'.length;
        const endIndex = html.indexOf('and took');
        const textBetween = html.substring(startIndex, endIndex);

        // Find the number of images and their alt attributes between 'gave bank' and 'and took'
        const imgTagsBetween = textBetween.match(/<img[^>]+>/g) || [];
        const altAttributesBetween = imgTagsBetween.map(img => img.match(/alt="([^"]*)"/)[1]);

        // Find the number of images and their alt attributes after 'and took'
        const imgTagsAfterTook = textAfterTook.match(/<img[^>]+>/g) || [];
        const altAttributesAfterTook = imgTagsAfterTook.map(img => img.match(/alt="([^"]*)"/)[1]);

        // Output the number of images and their alt attributes
        console.log('Number of images between "gave bank" and "and took":', imgTagsBetween.length);
        console.log('Alt attributes of images between "gave bank" and "and took":', altAttributesBetween);
        console.log('Number of images after "and took":', imgTagsAfterTook.length);
        console.log('Alt attributes of images after "and took":', altAttributesAfterTook);