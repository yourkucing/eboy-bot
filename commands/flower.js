const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
		var flowerimage = [
			{
				name: 'Daffodil',
				picture: 'https://www.gardenia.net/storage/app/public/uploads/images/detail/27458176_s%20Optimized.jpg',
				description: 'Narcissus (Narcissi) (often called a daffodil) is the botanic name for a genus of mainly hardy, mostly spring-flowering, bulbs in the Amaryllidaceae family. They are native to Europe, North Africa, and Asia.\r\nIt has pale yellow perianths with a darker central trumpet (paracorolla or "corona"). The long, narrow leaves are slightly greyish in colour and rise from the base of the stem. During the winter, the flowering part of narcissi dies away, and the plant lives on underground in a bulb. A bulb is an onionlike structure, filled with food. The plant lives off this food during the winter, protected from the cold by the soil above.'
			},
			{
				name: 'Dahlia',
				picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Kwiat_Dalii.JPG/250px-Kwiat_Dalii.JPG',
				description: 'Dahlia is a genus of plants with large brightly-colored flowers. They are from Mexico, Central America, and Colombia. There are at least 36 species of Dahlia. Dahlia are often grown in flower gardens. This flower grows well away from strong, direct sunlight.'
			},
			{
				name: 'Daisy',
				picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Bellis_perennis_white_%28aka%29.jpg/220px-Bellis_perennis_white_%28aka%29.jpg',
				description: 'Bellis perennis is a very common European species of daisy, of the Asteraceae family, often considered the model type for the name "daisy". \r\nMany related plants also share the name "daisy", so to distinguish this species from other daisies it is sometimes qualified as common daisy, lawn daisy or English daisy. The plant resembles Leucanthemum vulgare,a similar plant in the same family. Bellis perennis is native to western, central and northern Europe, but widely naturalised in most temperate regions including the Americas and Australasia.'
			},
			{
				name: 'Edelweiss',
				picture: 'https://i.ytimg.com/vi/qAzpLJbEAvE/maxresdefault.jpg',
				description: 'Edelweiss is a well-known Europe mountain flower. Leaves and flowers are covered with white hairs and look woolly. Each Edelweiss bloom has five to six small yellow flower heads surrounded by leaflets in a star shape. The flowers are in bloom between July and September.'
			},
			{
				name: 'Hibiscus',
				picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Red_Hibiscus.jpg/220px-Red_Hibiscus.jpg',
				description: 'Hibiscus or rosemallow is a genus of plants with a flower of bright colors. It grows mostly in the tropics, but some species grow in cool climates. Hibiscus often become national/state flowers. For example, the Hawaiian hibiscus is the state flower of Hawaii.\r\nThe flower usually has five petal. Hibiscus comes in many colours like white to pink, red, purple and yellow.'
			},
			{
				name: 'Jasmine',
				picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Jasminum_polyanthum2.jpg/240px-Jasminum_polyanthum2.jpg',
				description: 'Jasmine is a genus of plants. They are shrubs or vines that grow in moderately warm climates. There are about 200 different species of Jasmine. They are also quite liked in gardens. Tea can be made from the flowers. Some species are used to make special oil, perfumes or incense. Women, especially from Asia sometimes wear jasmine flowers in their hair. Jasmine flowers are white or yellow in colour, although in rare instances they can be slightly reddish. Jasmine flowers are well known for their lovely smell. jasmine can also be a female name.'
			},
			{
				name: 'Lily',
				picture: 'https://www.gardeningknowhow.com/wp-content/uploads/2017/02/oriental-lily.jpg',
				description: 'The lily is a genus of flowering plant. There are many species of lilies, like trumpet lilies and tiger lilies. They are usually quite tall, and are perennials. Most lilies grow from a bulb, which in some species develops into a rhizome, which carries small bulbs.\r\nLilies grow in Europe, North America, and Asia. There are more than 100 species, and many cultivated varieties. They also come in various colours. It tends to grow wild in the forest and a grassy plain of a mountainous area, but several kinds grow wild on wet ground. A lily\'s petals come in multiples of three. The fleur de lys is a stylized depiction of the lily.'
			},
			{
				name: 'Water-lily',
				picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Seerosen_wei%C3%9F.jpg/270px-Seerosen_wei%C3%9F.jpg',
				description: 'Nymphaea is a genus of aquatic plants in the family Nymphaeaceae. There are about 50 species in the genus, which is widely distributed. The common name, shared with some other genera in the same family, is water-lily or waterlily.'
			},
			{
				name: 'Lotus',
				picture: 'https://english.mathrubhumi.com/polopoly_fs/1.3215425.1539237272!/image/image.jpg_gen/derivatives/landscape_894_577/image.jpg',
				description: 'Nelumbo is a genus of water plants which are also known as lotus. Lotus flowers are large – up to 20 cm (8 inches) across – and they smell sweet. The lotus flowers grow over the water. Lotus leaves often float on top of the water. The roots of lotus plants are in the mud (wet dirt) under the water. Every part of every plant must have air for respiration (breathing). Air spaces in the stems and roots make the lotus able to live and respire under water.'
			},
			{
				name: 'Marigold',
				picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Calendula_officinalis_03-09-2005_15.32.56.JPG/250px-Calendula_officinalis_03-09-2005_15.32.56.JPG',
				description: 'Calendula officinalis (pot marigold, ruddles, common marigold, garden marigold), is a plant in the genus Calendula of the family Asteraceae. It is probably native to India. It was the state flower of Junagadh and Bantva-Manavadar State, now part of Gujarat.'
			},
			{
				name: 'Morning glory',
				picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Morning-glory-C6295b.jpg/200px-Morning-glory-C6295b.jpg',
				description: 'Morning glory is a family of common flowering plants known as Convolvulaceae which includes bindweed. Most morning glory flowers curl up and close during the warm parts of the day, and are wide open in the morning, like their name. On a cloudy day, the flower may last until night. The flowers usually start to fade a few hours before the petals start curling. They prefer full sun throughout the day. Some morning glories, such as Ipomoea muricata, are night blooming flowers.'
			},
			{
				name: 'Violet',
				picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/5p_pwy_pansies.jpg/200px-5p_pwy_pansies.jpg',
				description: 'The violet is a genus of flowering plants. The common blue violet (Viola sororia) is the state flower of the U.S. state of Illinois. There is also a famous poem that refers to violets. It goes "Roses are red, violets are blue", and then the poet adds his or her own lines to it. It is also February\'s birth flower.'
			},
			{
				name: 'Petunia',
				picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Pink_petunias.jpg/240px-Pink_petunias.jpg',
				description: 'Petunia is a genus of plants. All of them bear flowers. They are in the Nightshade family, and are related to tobacco. Many people grow them in the garden. Petunias are usually used as annual plants, because they die when the weather becomes cold. They grow best when they are planted in the sun.'
			},
			{
				name: 'Tulip',
				picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Tulipa_suaveolens_floriade_to_Canberra.jpg/250px-Tulipa_suaveolens_floriade_to_Canberra.jpg',
				description: 'Tulip (Tulipa) is a potflower plant. There is many cultivars and species of tulips. Cultivars are used as ornamental plants. It grows in southern Europe, north Africa, and Asia from Anatolia and Iran in the east to northeast of China and Japan, Indo Asia. It is the national flower of Afghanistan.'
			},
			{
				name: 'Rose',
				picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Beauty_of_Red_Rose.jpg/220px-Beauty_of_Red_Rose.jpg',
				description: 'The rose is a type of flowering shrub. Its name comes from the Latin word Rosa. The flowers of the rose grow in many different colors, from the well-known red rose or yellow roses and sometimes white or purple roses. Roses belong to the family of plants called Rosaceae. All roses were originally wild and they come from several parts of the world, North America, Europe, northwest Africa and many parts of Asia and Oceania. There are over 100 different species of roses.'
			},
			{
				name: 'Sunflower',
				picture: 'https://cdn.zekkei-japan.jp/images/spots/1e4f260754a3993fdc17e552e75d58a7.jpg',
				description: 'The sunflower (Helianthus annuus) is a living annual plant in the family Asteraceae, with a large flower head (capitulum). The stem of the flower can grow up to 3 metres tall, with a flower head that can be 30 cm wide. Other types of sunflowers include the California Royal Sunflower, which has a burgundy (red + purple) flower head.'
			},
			{
				name: 'Lavender',
				picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Single_lavendar_flower02.jpg/250px-Single_lavendar_flower02.jpg',
				description: 'Lavender is a type of plant found on almost all continents. It has a purplish colour. It has a colour named after it, called lavendar. Its Latin and scientific name is Lavandula.'
			},
			{
				name: 'Bellflower',
				picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Campanula_cespitosa.jpg/250px-Campanula_cespitosa.jpg',
				description: 'The family Campanulaceae (also bellflower family), of the order Asterales, contains about 70 genera and 2000 species, you are probably familiar with bellflowers and cardinal flower and think of these as a group of small herbaceous flowers.'
			},
			{
				name: 'Orchid',
				picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Dendrobium-kingianum.jpg/240px-Dendrobium-kingianum.jpg',
				description: 'Dendrobium is one of the largest genus of orchids with about 1000 species being known. Being such a large geoup creates much diversity. Dendrobiums are found only in the Eastern Hemisphere and range from Australia, throughout the South Pacific and Philippines, Southeast Asia, and India, and a small representation in Japan.'
			}
		]
		flowerimage = flowerimage.sort()
		var randomgif = flowerimage[Math.floor(Math.random()*flowerimage.length)];
		const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setTitle(randomgif.name)
		.setImage(randomgif.picture)
		.addFields(
		{ name: 'Description:', value: randomgif.description }
		)
		.setFooter('source: wikipedia');
		msg.channel.send(embed);
}