import type { HauntStory } from '../../types';

export const SS_VI_3: Record<number, HauntStory> = {
  51: {
    id: 51,
    title: 'Director\'s Cut',
    intro:
      '"Cắt! Cắt! Cắt! Vì Chúa của Kubrick, mấy người là những diễn viên TỆ NHẤT!" bạn gầm lên. "Sáng mai cùng lắm chỉ còn một người trong các người được làm phim này thôi! Và tôi chẳng quan tâm là ai!"',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Đặt các Props (token Item hình ngũ giác) đánh số 1–10 ngẫu nhiên vào các phòng khác nhau, mặt số úp xuống, ít nhất hai cái mỗi tầng; không cái nào được nằm ở tầng có Theater. Đặt các token Production Assistant màu đỏ tươi vào phòng của bạn với số lượng bằng số kẻ phản bội. Rút một lá Event (Tầm Nhìn của bạn) và đặt úp dưới lá Omen đã khởi động haunt; đừng nhìn nó.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Những nhà thám hiểm khác là diễn viên trong bộ phim kinh dị của bạn, The Haunting of Hell Hotel, và họ đang phá hỏng nó. Lá Omen đã khởi động haunt che giấu Tầm Nhìn của bạn; trợ lý của bạn đã làm mất nó, nên bạn phải đi tìm.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn có Item 10 và Tầm Nhìn và bạn đang ở Theater. Khi bạn hoặc một diễn viên đơn độc ở trong Theater cầm lá Omen, người cầm sẽ tiết lộ Tầm Nhìn và diễn lại sự kiện một cách kịch tính; nhà thám hiểm đó thắng.',
      },
      {
        heading: 'Luật Di Chuyển Đặc Biệt',
        body: 'Các Production Assistant của bạn không hành động trong lượt quái vật; nếu chúng không bị choáng, bạn có thể di chuyển chúng cùng bạn (chúng phòng thủ thay bạn nhưng không tấn công). Khi vào phòng có token Item, bạn có thể nhìn nó; nếu là Item 10, lấy nó và lá Omen; nếu không thì đặt lại. Tới được Theater với Item 10 thì bạn thắng.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Kẻ phản bội có thể thực hiện tấn công Knowledge nhắm vào một Production Assistant trong cùng phòng. Nếu kẻ phản bội định tấn công bạn trong khi có một Production Assistant ở phòng của bạn, chúng phải tấn công Assistant đó thay vào — và dù dùng chỉ số nào, Assistant cũng phòng thủ bằng Knowledge.',
      },
    ],
    monsters: [{ name: 'Production Assistant', stats: 'Knowledge 5' }],
  },

  52: {
    id: 52,
    title: 'Prism',
    intro:
      'Lách cách. Vù vù. Ken két. Rào rạo. Mặt đất rung chuyển và bạn bị bao quanh bởi tiếng máy móc. Căn phòng, cùng mọi thứ trong nó, đang chuyển động.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Rời khỏi phòng — lần này kẻ phản bội được ở lại với căn nhà. Khi bạn quay lại, căn nhà trông khác hẳn. Lấy một tờ giấy; bạn sẽ muốn ghi chú để tìm ra chuỗi an toàn và tìm đường ra.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Căn nhà là một nhà tù chết người được thiết kế để làm bạn rối trí và mắc kẹt. Các kiến trúc sư đã để lại một lối đi an toàn tới phòng thoát ra — hãy tìm cách đến đó và trốn thoát kịp thời.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bất kỳ anh hùng nào còn sống ở trong phòng thoát ra tại trung tâm của lăng kính khi thí nghiệm kết thúc.',
      },
      {
        heading: 'Luật Di Chuyển Đặc Biệt',
        body: 'Vào một phòng có token Obstacle có thể kích hoạt một cái Bẫy; kẻ phản bội sẽ nói cho bạn biết phải làm gì. Nếu bạn khám phá một phòng có biểu tượng hoặc dấu ?, bạn có thể bỏ qua nó và không cần kết thúc lượt ở đó. Nếu một tầng không còn ô nào, hãy rút ô phòng tiếp theo cho bất kỳ tầng nào và đặt nó xuống.',
      },
    ],
    monsters: [],
  },

  53: {
    id: 53,
    title: 'Till Morning Light',
    intro:
      '"Cho bọn tao vào! Bọn tao chỉ muốn giết chúng mày thôi!" Tường và cửa phải trụ vững tới sáng, khi việc giết người không còn hợp pháp nữa. Rồi một giọng quen thuộc hét lên từ bên trong: "Được rồi, để tao cho chúng vào!"',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Đặt thanh Lượt/Sát thương về 1. Nếu Panic Room chưa có trong cuộc chơi, lục chồng phòng tìm nó, đặt xuống, và xáo lại. Đặt một token Lock lên cửa vào Panic Room.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Đây là lễ hội bạo lực thường niên gọi là the Surge. Những người bên ngoài muốn giết bạn, và kẻ phản bội nghĩ cho chúng vào là ý hay.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bình minh tới mà bạn vẫn còn sống — khi thanh Lượt/Sát thương đạt 5.',
      },
      {
        heading: 'Cách Bọn Surger Đột Nhập',
        body: 'Kẻ phản bội mở các phòng tầng trệt có cửa không nối với phòng nào; có anh hùng trong phòng sẽ khiến việc đó khó hơn. Kẻ phản bội bắt đầu với Key (mở cửa trước dễ dàng — bạn có thể muốn lấy nó). Bạn có thể chuyển Lock sang Panic Room, nhưng bọn Surger sẽ gặp nhiều khó khăn hơn.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Khi một anh hùng tấn công một Surger và thắng cách biệt 3 trở lên, Surger đó bị loại bỏ thay vì chỉ bị choáng.',
      },
    ],
    monsters: [],
  },

  54: {
    id: 54,
    title: 'Monster Mash',
    intro:
      'Bạn nhặt được một tấm thiệp mời rơi: "Bạn được mời tới Dạ Vũ Transylvania, sự kiện giao tế bên kia nấm mồ của năm. Hãy quẩy lên để đánh thức người chết! —Dr. Frankenstein"',
    sections: [
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Căn nhà đang đầy ắp quái vật khao khát cái chết của bạn. Mỗi quái vật chỉ bị choáng bởi đòn tấn công thường (kể cả Speed và Sanity), nhưng sẽ bị trục xuất vĩnh viễn nếu nó từng ở cùng phòng với một anh hùng đang mang một lá Omen cụ thể.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn trục xuất số quái vật bằng một nửa số nhà thám hiểm, làm tròn lên.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Không thể tấn công kẻ phản bội.',
      },
      {
        heading: 'Luật Di Chuyển Đặc Biệt',
        body: 'Trừ khi không thể đi đâu khác, đừng bao giờ vào hay ra khỏi Ballroom — đó là nơi tệ hại cho những kẻ không phải quái vật.',
      },
      {
        heading: 'Danh Sách Khách (Quái Vật → Điểm Yếu)',
        body: 'Banshee → Spirit Board (ả phải trở về cõi khác). Crimson Jack → Photograph (đối chất hắn bằng bằng chứng tội ác). Demon Lord → Holy Symbol (nó cháy bỏng!). Dracula → Spear (đâm cọc xuyên tim). Frankenstein\'s Monster → Girl (khơi gợi mặt dịu dàng của nó). Mummy → Book (đọc tên hắn từ Book of the Dead). Witch → Cat (ả muốn lấy lại con vật quen của mình). Zombie Lord → Vial (cơ thể hắn tan thành nhớt).',
      },
    ],
    monsters: [],
  },

  55: {
    id: 55,
    title: 'She Is Not Amused',
    intro:
      'Bạn của bạn gỡ chiếc mũ trùm rách rưới — những con rắn ngóc lên nơi lẽ ra là tóc, và cô ta nói bằng tiếng Hy Lạp cổ. Căn nhà này quả là có lắm tượng...',
    sections: [
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Bạn của bạn là Medusa, một Gorgon với mái tóc rắn độc, có thể hóa đá người chỉ bằng một cái liếc mắt. Có lẽ bạn không nên nhìn cô ta.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn chặt đầu Medusa.',
      },
      {
        heading: 'Cách Sự Hóa Đá Hoạt Động',
        body: 'Trong lượt của mình, một anh hùng chưa bị hóa đá có thể đổ Knowledge 4+ để giải hóa đá cho một anh hùng đã hóa đá trong cùng phòng. Các bức tượng là token "S" úp xuống; khi Medusa chịu sát thương vật chất, một anh hùng ở phòng có một tượng có thể đổ Knowledge 4+ để lật nó thành một Athenian Hoplite. Đầu lượt, một anh hùng có Hoplite mặt ngửa có thể phái nó đuổi theo Medusa (nó bỏ qua mọi văn bản tiêu cực của phòng và lá bài); khi tới được chỗ cô ta, nó có thể thực hiện tấn công Might.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Medusa chỉ có thể bị giết bởi một nhà thám hiểm gây đủ sát thương vật chất để giết kẻ phản bội trong khi đang cầm lá Image in the Mirror. Với lá đó, thêm 2 xúc xắc vào các lần đổ tấn công/phòng thủ chống Medusa. Medusa có thể đầu độc bạn, đặt cho bạn một token Might Roll làm hao Might của bạn; gỡ các token của bạn khi bạn nhận Might từ một lá bài hoặc phòng.',
      },
      {
        heading: 'Luật Sự Kiện Đặc Biệt',
        body: 'Nếu bạn khám phá một phòng Event mà không cầm lá Image in the Mirror, đổ 3 xúc xắc; nếu 3+ thì lục chồng Event và chồng bỏ tìm một lá Image in the Mirror và đặt trước mặt bạn (coi như lá Item), rồi xáo chúng lại với nhau. Bỏ qua luật này nếu cả hai lá Image in the Mirror đã ở chỗ các nhà thám hiểm.',
      },
    ],
    monsters: [{ name: 'Hoplite', stats: 'Speed 5 · Might 5' }],
  },

  56: {
    id: 56,
    title: 'Make America Disintegrate Again',
    intro:
      'Có điều gì đó bẩn thỉu không lời ở ứng cử viên ấy — gương mặt sáp của hắn, những chính sách chỉ phục vụ cho sự hỗn loạn. Khi những lời thì thầm lạnh lẽo của hắn luồn vào tai bạn, bạn nhận ra: nhiệm kỳ tổng thống của hắn thực sự sẽ là ngày tận thế. Giờ bạn phải hợp sức ngăn chặn điều đó.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Bạn có thể phân chia lại các lá Item với nhau. Bạn có thể phân chia lại số điểm Sanity hiện tại của mình cho nhau.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Ứng cử viên là một lich đáng sợ tìm cách kiểm soát sự sống và cái chết. Khi hoàn tất nghi lễ, hắn sẽ trở thành Tổng Thống kiêm Chúa Tể của nước Mỹ. Một trong những người bạn của bạn đã bị lung lay và trở thành kẻ phản bội.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn phá hủy toàn bộ Phylactery của lich trước khi kẻ phản bội hoàn tất Rites of Ascension.',
      },
      {
        heading: 'Cách Phá Hủy Một Phylactery',
        body: 'Một Phylactery là một token Item hình ngũ giác. Tất cả anh hùng còn lại phải ở cùng phòng với một Phylactery để phá hủy nó.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Khi bạn chịu sát thương Sanity, kẻ phản bội có thể cho bạn lựa chọn phân chia lại nó cho các anh hùng khác (làm tròn lên); nếu bạn không làm, bạn chịu toàn bộ sát thương. Việc phân chia lại diễn ra trước khi bất kỳ anh hùng nào chịu sát thương.',
      },
    ],
    monsters: [],
  },

  57: {
    id: 57,
    title: 'The Gathering Storm',
    intro:
      'Đàn quạ rít lên, một tiếng sấm tắt dần thành tiếng hú trầm, và căn nhà oằn xuống khi tường bị giật bung ra ngoài bởi một cơn bão dữ dội. Không có kẻ phản bội trong haunt này — chỉ là bạn chống lại cơn bão. Chúc may mắn.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Người mở haunt chọn một phòng trống trên mái (mong là xa nhà thám hiểm nào đó) và phá hủy nó. Để riêng các token Item hình ngũ giác (Tools). Để riêng sáu token Obstacle (Destroyed Landings).',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Không có kẻ phản bội. Chỉ là bạn chống lại cơn bão.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả lối vào tầng hầm đều có token Tool đặt trên đó, bịt kín tầng và cứu những người ở dưới (điều này khiến bất kỳ ai mắc kẹt ở trên gặp nguy). Bạn thua khi tất cả nhà thám hiểm đã chết hoặc Basement Landing bị phá hủy.',
      },
      {
        heading: 'Cách Tìm Tools',
        body: 'Hy sinh di chuyển để tìm kiếm: chọn một số xúc xắc tối đa bằng Speed hiện tại của bạn và đổ 2+ để nhận một Tool, rồi trừ số xúc xắc đó khỏi Speed của bạn trong lượt này.',
      },
      {
        heading: 'Cách Đẩy Cơn Bão Tiến Tới',
        body: 'Cuối lượt của mỗi nhà thám hiểm (trừ lượt mở haunt), phá hủy mỗi phòng kề với một phòng đã bị phá hủy ở lượt trước. Nếu Basement Landing bị phá hủy, các nhà thám hiểm thua.',
      },
      {
        heading: 'Cách Phá Hủy Một Phòng',
        body: 'Gỡ các quân và token, lật phòng lại, và đặt về chỗ; các token trên đó bị mất và các nhà thám hiểm trên đó bị giết. Một nhà thám hiểm cùng tầng có thể bỏ một Tool để cứu một phòng khỏi bị phá hủy. Grand Staircase/Foyer/Entrance Hall tính là một phòng (đánh dấu landing bị phá hủy bằng một token Obstacle). Khi cả một tầng bị phá hủy, tiếp theo phá hủy landing của tầng dưới cộng với mọi phòng kề với nó. Trước khi phá hủy Basement Landing, kiểm tra xem tất cả lối vào đã bịt kín chưa: nếu rồi, các nhà thám hiểm thắng; nếu chưa, họ thua.',
      },
      {
        heading: 'Cách Bịt Kín Một Lối Vào',
        body: 'Trong lượt của bạn, bỏ một Tool khi đang ở trong một phòng tầng hầm có lối ra tầng cao hơn (điều này chặn cơn bão, không chặn di chuyển). Các lối vào tầng hầm gồm Basement Landing, Coal Chute, một phòng có token Below Collapsed Room, và bất kỳ phòng nào có dumbwaiter hoặc cầu thang nối với tầng hầm.',
      },
      {
        heading: 'Luật Di Chuyển Đặc Biệt',
        body: 'Bạn có thể cố rời một phòng đã bị phá hủy, nhưng phải đổ Speed 3+ nếu không sẽ rơi xuống landing của tầng dưới, chịu 2 xúc xắc sát thương vật chất (bạn có thể chọn thất bại trong nỗ lực liều lĩnh để rời tầng của mình). Bạn có thể bỏ một Tool để vào và ra các phòng bị phá hủy tự do trong phần còn lại của lượt (coi như mọi lối vào trên các ô bị phá hủy đều mở).',
      },
    ],
    monsters: [],
  },

  58: {
    id: 58,
    title: 'Olly Olly Oxen Free',
    intro:
      'Một tiếng cười khúc khích rùng rợn vọng khắp hành lang. Một giọng đếm "1... 2... 3..." tới 10, rồi gọi to, "Olly Olly Oxen Free!" Chắc bạn nên tìm một chỗ trốn tốt.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Để riêng số token Knowledge Roll bằng số nhà thám hiểm.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Kẻ phản bội bị ám bởi một cô bé chết khi đang chơi trốn tìm và giờ đi tìm sự trả thù. Cách duy nhất ngăn cô ta là trừ tà linh hồn cô bằng cách đốt những Doll "bạn bè" của cô.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn tìm được số Doll bằng số nhà thám hiểm và đốt chúng trong Furnace Room.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Của Mình',
        body: 'Mỗi lượt một lần, bạn có thể đổ Knowledge 5+ ở bất kỳ phòng nào có biểu tượng Item mà chưa có token Knowledge Roll, để tìm một trong các Doll. Khi thành công, thêm một token Knowledge Roll vào đó; không thể tìm thấy Doll nào khác trong phòng đó nữa.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Bạn không thể gây sát thương cho kẻ phản bội.',
      },
      {
        heading: 'Cách Đốt Một Doll',
        body: 'Khi bạn đã có một Doll, hãy mang nó tới Furnace Room để đốt. Mỗi nhà thám hiểm chỉ có thể mang một Doll tại một thời điểm.',
      },
    ],
    monsters: [],
  },

  59: {
    id: 59,
    title: 'The Fleshchild\'s Alchemical Mandate',
    intro:
      'Một trong những người bạn của bạn chẳng phải bạn gì cả — họ là Fleshchild của nhà giả kim Zosimus! Hình dạng thật của họ đã lộ ra, và họ đến để thu hoạch một mẫu từ mỗi người các bạn.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Đặt một token quái vật màu cam (một cân Flesh) lên thẻ nhân vật của mỗi anh hùng.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Kẻ phản bội là tạo vật homunculus của một nhà giả kim, được phái đến lấy một chút từ mỗi người các bạn.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Fleshchild đã chết.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Của Mình',
        body: 'Đầu lượt của bạn, nếu bạn không có Flesh trên thẻ nhân vật, mất 1 ở mỗi chỉ số của bạn.',
      },
      {
        heading: 'Cách Tự Cứu Mình',
        body: 'Khi Fleshchild chịu sát thương từ một đòn tấn công, nó đánh rơi toàn bộ Flesh đang mang. Nếu bạn không có Flesh trên thẻ và bạn kết thúc lượt ở phòng có Flesh, hãy nhặt một cái và đặt lên thẻ của bạn.',
      },
    ],
    monsters: [],
  },

  60: {
    id: 60,
    title: 'Cat O\'Clock',
    intro:
      'Bạn vốn luôn là người mê mèo. Nhưng có sự khác biệt giữa yêu mèo và để tình yêu mèo điều khiển mình. Khi căn nhà đầy ắp mèo con, hãy tự nhắc mình rằng bạn là một con người — và con người lớn hơn mèo. Dù sao thì cũng hầu hết mèo.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Để riêng số token Item hình ngũ giác (Ingredients) bằng số anh hùng, và một token Item Pile hình ngũ giác (Cat Food). Nếu Kitchen chưa có trong cuộc chơi, lục chồng phòng tìm nó, đặt xuống, và xáo lại.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Kẻ phản bội đang đưa những con Kitten hung dữ vào nhà. Hãy xoa dịu lũ Kitten và làm Cat Food để dỗ The Cat.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn thuyết phục được The Cat ăn tối, dỗ nó và lũ mèo con vào một giấc ngủ trưa.',
      },
      {
        heading: 'Cách Xoa Dịu Lũ Kitten',
        body: 'Để xoa dịu một Kitten, một anh hùng phải đổ Sanity 4+ để làm choáng và xoa dịu nó. Khác với choáng thông thường, một Kitten đã được xoa dịu sẽ giữ trạng thái đó suốt phần còn lại của ván.',
      },
      {
        heading: 'Cách Dỗ The Cat',
        body: 'Mỗi lượt một lần, một anh hùng ở phòng có biểu tượng Omen có thể đổ Knowledge 3+ để tìm một Ingredient. Mang số Ingredient bằng số anh hùng tới Dining Room, Kitchen, hoặc Menagerie để làm Cat Food (thay chúng bằng một token Cat Food). Rồi một anh hùng phải đánh bại The Cat bằng tấn công Sanity (+1 xúc xắc cho mỗi anh hùng khác trong phòng).',
      },
    ],
    monsters: [],
  },

  61: {
    id: 61,
    title: 'Captain Sting\'s Revenge',
    intro:
      'Nước phun trào và mùi nước biển tràn ngập căn nhà khi bọn cướp biển tràn vào. "Chuẩn bị chiếm vùng đất này nào!" Bạn của bạn đã không sống sót qua cuộc đột kích — hãy báo thù cho họ bằng cách phá hủy rương kho báu của bọn cướp biển.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Đặt số token Item hình ngũ giác (Pieces of Loot) bằng số anh hùng lên các phòng, mỗi phòng một cái (mỗi tầng một cái nếu có thể).',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Bạn của bạn bị giết bởi Captain Sting, một thủ lĩnh cướp biển chết chóc, kẻ coi trọng kho báu hơn con người.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Treasure Chest bị phá hủy. Bọn Cướp Biển thắng khi chúng đưa tất cả Pieces of Loot trở về Underground Lake.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Bạn có thể tấn công Treasure Chest mỗi lượt một lần, chỉ bằng Might (Chest có Might 4). Khi thắng, đặt một token Might Roll lên thẻ của bạn. Sau khi các anh hùng có bốn token Might Roll, đòn tấn công Might thành công tiếp theo sẽ phá hủy Chest. Captain Sting có thể bị choáng bởi đòn tấn công thường nhưng không chịu sát thương.',
      },
      {
        heading: 'Luật Di Chuyển Đặc Biệt',
        body: 'Bạn có thể nhặt Pieces of Loot, nhưng một nhà thám hiểm mang một cái sẽ bị giảm 1 ô di chuyển.',
      },
    ],
    monsters: [],
  },

  62: {
    id: 62,
    title: 'Rosencrantz and All of You Are Dead',
    intro:
      'Quần áo của bạn biến thành những bộ váy áo thời Elizabeth và bạn cảm thấy một thôi thúc kỳ lạ muốn nói theo nhịp thơ iambic pentameter. Bạn nhận ra mình đang ở trong Castle Elsinore.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Đặt token Item 1 (the Mirror) và token Item 2 (the Dagger) ngửa lên ở các phòng khác nhau.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Tất cả các bạn đã âm mưu giết cha của kẻ phản bội, vị Vua của Đan Mạch. Kẻ phản bội là Hamlet, kẻ sẽ trở nên trầm uất rồi cố giết bạn và chính mình. Hãy kết thúc câu chuyện này thật nhanh.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn đọc các lời thoại của mình để kết thúc câu chuyện trước khi Hamlet đọc lời thoại của hắn và chết (bạn cũng có thể thắng bằng cách giết Hamlet trước ba câu thoại kinh điển của hắn, nhưng điều đó khó).',
      },
      {
        heading: 'Cách Chấm Dứt Toàn Bộ Bi Kịch Này',
        body: 'Có năm màn; hãy tới đúng phòng và đọc to các lời thoại, theo thứ tự. Mỗi anh hùng có thể hoàn thành một màn mỗi lượt. Màn 1 (Balcony, Roof Landing, hoặc Widow\'s Walk): "Something is rotten in the state of Denmark." Màn 2 (Drawing Room, Library, hoặc Study): "Though this be madness, yet there is method in\'t." Màn 3 (Gallery, Solarium, hoặc Theater): "The lady doth protest too much, methinks." Màn 4 (Kitchen, Larder, hoặc Storm Cellar): "If I gall him slightly, it may be death." Màn 5 (phòng của Hamlet, một cuộc đấu — tấn công hắn ít nhất ba lần, hắn vẫn sống): "Good night, sweet prince. And flights of angels sing thee to thy rest!" Khi cả năm màn hoàn thành, haunt kết thúc; nếu Hamlet còn sống, bạn thắng.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Sau khi Hamlet tấn công bạn, nếu bạn còn sống, bạn lập tức tấn công hắn. Trong Màn 5, bạn có thể tấn công hoặc phòng thủ với số xúc xắc bất kỳ tối đa bằng Might của mình (ít nhất 1 xúc xắc) — nhớ rằng bạn đang cố không giết hắn.',
      },
    ],
    monsters: [],
  },

  63: {
    id: 63,
    title: 'Shush',
    intro:
      'Bạn cố nói nhưng không có âm thanh nào phát ra. Bạn không bị điếc — nhưng bạn không thể tạo ra âm thanh. Đằng xa, một cánh cửa đóng sầm.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Bạn không thể nói — các anh hùng theo nghĩa đen không thể nói. Ngừng đọc to phần này. Đọc phần còn lại trong im lặng, rồi chuyển trang cho nhà thám hiểm bên trái bạn.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Bạn của bạn lột chiếc mặt nạ người, để lộ một sinh vật ghê rợn. Cái Box mà nó canh giữ — the Voicebox — là nguồn của phép thuật khiến bạn câm lặng.',
      },
      {
        heading: 'Cách Dùng Các Spellbook',
        body: 'Thu thập đúng các bùa chú để mở Voicebox và lấy lại giọng nói, nhưng một số Spellbook có thể bị nguyền.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn đã lấy lại giọng nói và giết kẻ phản bội.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Của Mình',
        body: 'Cho tới khi kẻ phản bội nói khác đi, bạn không thể nói.',
      },
    ],
    monsters: [],
  },

  64: {
    id: 64,
    title: 'Chairman of the Board',
    intro:
      'Bạn gặp các nhà thám hiểm đồng hành lần đầu ở căn nhà này, và giờ bạn biết sự thật: họ là ma từ đầu, và họ đã dành chỗ cho thêm một người nữa. Hãy ra ngoài nhanh — nếu họ tước đi sự tỉnh táo của bạn, bạn cũng sẽ trở thành cư dân vĩnh viễn.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Rời khỏi phòng (kẻ phản bội ở lại với căn nhà). Lấy một tờ giấy (the Spirit Board) và viết các chữ cái từ A đến Z với khoảng cách rộng rãi giữa chúng. Khi bạn quay lại, lấy một token Item hình ngũ giác (the Planchette). Lấy lá Omen Spirit Board từ bất cứ ai đã tìm thấy nó.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Các nhà thám hiểm khác giờ là Poltergeist, cố biến bạn thành ma.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn đi qua cửa trước của Entrance Hall.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Bạn có thể thử một lần trừ tà mỗi lượt để giết một Poltergeist ngay lập tức: Sanity 5+ ở Chapel, Crypt, hoặc Pentagram Chamber, hoặc khi đang mang Holy Symbol hay Ring; hoặc Knowledge 5+ ở Library hay Research Laboratory, hoặc khi đang mang Book hay Crystal Ball. Khi thành công, một kẻ phản bội trong phòng của bạn chết ngay lập tức.',
      },
      {
        heading: 'Cách Dùng Spirit Board',
        body: 'Khi bị tấn công, bạn không đổ xúc xắc — bạn dùng Spirit Board. Poltergeist viết ra một thứ được mô tả trên ô phòng (một hoặc hai từ, 6+ chữ cái). Tối đa bằng giá trị Knowledge của bạn, chỉ Planchette vào các chữ cái bạn nghĩ xuất hiện; Poltergeist nói mỗi chữ xuất hiện bao nhiêu lần. Mỗi chữ cái đúng (một lần cho mỗi lần xuất hiện) được tính vào phòng thủ của bạn. Rồi đoán cả từ; nếu đúng, thêm 1 nữa vào phòng thủ. Khi bạn lẽ ra gây sát thương cho một Poltergeist bằng Spirit Board, bạn có thể thay vào đó di chuyển 1 phòng.',
      },
      {
        heading: 'Luật Di Chuyển Đặc Biệt',
        body: 'Các Poltergeist không tính là đối thủ cho mục đích tính di chuyển.',
      },
      {
        heading: 'Luật Điềm Báo Đặc Biệt',
        body: 'Spirit Board không thể bị bỏ, trao đổi, hay đánh cắp.',
      },
    ],
    monsters: [],
  },

  65: {
    id: 65,
    title: 'Sushi Night',
    intro:
      'Căn nhà đang ngập nước, và bạn của bạn đã biến thành một Merperson. Bạn phải săn lùng kẻ phản bội trước khi căn nhà ngập hoàn toàn và Merperson trượt trở lại đại dương.',
    sections: [
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Bạn của bạn giờ là một Merperson, đáng gờm và khó bắt dưới nước. Hãy săn kẻ phản bội trước khi căn nhà ngập hoàn toàn.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Merperson đã chết. Bạn có thể chén thịt nó để trở thành bất tử.',
      },
      {
        heading: 'Luật Di Chuyển Đặc Biệt',
        body: 'Khi ở trong một phòng bị ngập (đánh dấu bằng token quái vật úp xuống), bạn đổ ít hơn 2 xúc xắc trên các lần đổ Speed và bị giảm 2 ô di chuyển (tối thiểu 1 xúc xắc và 1 ô).',
      },
    ],
    monsters: [],
  },

  66: {
    id: 66,
    title: 'The Cardinal Sins',
    intro:
      'Bạn của bạn đội lên một chiếc mũ chóp đỏ rực: "Hôm nay, nếu mọi việc đúng kế hoạch, ta sẽ được bầu làm Giáo Hoàng! Để đảm bảo cuộc bầu cử không bị tranh cãi, ta sẽ nhấn chìm căn nhà này trong máu của những kẻ tội lỗi!" À, đúng rồi. Bạn vừa quên mất mình đang ở đâu trong giây lát.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Đặt một token quái vật nhỏ mỗi màu (bảy Elector) úp xuống ở các phòng mà anh hùng không chiếm. Không hai phòng Elector nào được kề nhau, kể cả giữa các tầng, trừ khi không thể (thì đặt càng gần càng tốt).',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Kẻ phản bội là Cardinal Sinn, kẻ cho rằng bạn đã quá tội lỗi.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn ngăn kẻ phản bội được bầu làm Giáo Hoàng. Kẻ phản bội cần bốn Elector và phải lên tới mái nhà; nếu các anh hùng giữ tổng cộng bốn Elector hoặc giết kẻ phản bội, bạn thắng.',
      },
      {
        heading: 'Cách Ngăn Cardinal Trở Thành Giáo Hoàng',
        body: 'Giành được đa số Elector bỏ phiếu chống kẻ phản bội. Ở phòng có một Elector chưa bỏ phiếu, đổ Sanity 6+ để giành lá phiếu của nó; khi thành công, lấy Elector và đặt nó lên thẻ nhân vật của bạn.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Trừ khi kẻ phản bội có bốn Elector trở lên, chúng không thể chịu sát thương tinh thần hay vật chất; bạn có thể tấn công để đánh cắp các lá Item. Nếu bạn chết, đưa tất cả Elector của bạn cho kẻ phản bội.',
      },
    ],
    monsters: [],
  },

  67: {
    id: 67,
    title: 'Murderball',
    intro:
      'Linh hồn một cậu bé cười khúc khích, "Tớ biết một trò chơi vui! Để tớ kể luật cho cậu, rồi cậu có thể dạy người khác..." The Bully thích thú với những trò chơi bạo lực — trò ưa thích của hắn là ném một viên đá để xem ai chảy máu đẹp nhất.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Để riêng các token Knowledge Roll và token Sanity Roll, mỗi loại bằng số anh hùng.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Kẻ phản bội bị mê hoặc bởi linh hồn một cậu bé hung dữ — một Bully ném đá vào bạn.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn giải phóng linh hồn khỏi Bloodstone bằng cách đặt số token Knowledge Roll và/hoặc Sanity Roll vào Nursery bằng số anh hùng.',
      },
      {
        heading: 'Cách Giải Phóng Linh Hồn',
        body: 'Dụ linh hồn ra bằng cách cho nó thấy những vũ khí chết chóc hơn: gom hai vũ khí và thả chúng vào Nursery (Dynamite tính là vũ khí ở đây, cùng với Axe, Blood Dagger, Boomstick, Chainsaw, Sacrificial Dagger, Revolver, và Spear). Với ít nhất hai vũ khí trong Nursery, mỗi lượt một lần, đổ Knowledge hoặc Sanity 5+ ở đó để lừa The Bully; khi thành công, đặt một token loại của lần đổ đó vào Nursery.',
      },
      {
        heading: 'Nếu Bạn Chết',
        body: 'The Bully không cho bạn bỏ cuộc. Bỏ tất cả các lá Item của bạn, đặt quân của bạn vào Nursery, đặt lại các chỉ số, rút một lá Item, và không làm gì khác trong lượt này. Tiếp tục chơi lượt như bình thường.',
      },
    ],
    monsters: [],
  },

  68: {
    id: 68,
    title: 'He Who Must Not Be Read',
    intro:
      'Khi bạn của bạn mở một câu chuyện thiếu nhi về tên necromancer Maldovo, một chiếc chìa khóa biết bay có cánh dơi rơi xuống sàn. "Cuối cùng, việc triệu hồi của ta đã hoàn tất. Ta là Maldovo!" Bạn sẽ cần tìm ra linh hồn ẩn giấu của hắn trước khi hắn săn lùng bạn.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nếu kẻ phản bội có lá Key, chọn một anh hùng để lấy nó.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Trong câu chuyện, một phù thủy trẻ đã phá hủy linh hồn ẩn giấu của Maldovo. Bạn sẽ cần tìm ra nó trước khi Maldovo nuốt chửng linh hồn của chính các bạn.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn phá hủy linh hồn của Maldovo, được giấu trong một chuỗi Soulcrux: linh hồn nằm trong một quả trứng, trong một con vịt, trong một con thỏ, trong một chiếc rương khóa. Mở rương, giết con thỏ, giết con vịt, đập quả trứng, và phá hủy linh hồn bên trong.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Maldovo không thể chịu sát thương.',
      },
    ],
    monsters: [],
  },

  69: {
    id: 69,
    title: 'No Noose Is Good News',
    intro:
      'Một làn gió bụi cuộn quanh bạn của bạn, kẻ đang cầm một sợi dây thắt thành thòng lọng. "Ta sẽ đến tìm các ngươi, từng người một... Việc của The Hangman không bao giờ xong..." Bạn sẽ không bị treo cao nếu chơi trò treo cổ giỏi hơn The Hangman.',
    sections: [
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Kẻ phản bội bị ám bởi một đao phủ miền Tây hoang dã, kẻ sẽ không nghỉ ngơi cho tới khi tất cả mọi người bị treo cổ.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng còn sống đều được bảo vệ khỏi giá treo cổ.',
      },
      {
        heading: 'Cách Chơi Trò Treo Cổ',
        body: 'Trong lượt của bạn, dùng toàn bộ di chuyển để đoán một chữ cái nhằm giải trò treo cổ riêng của bạn. Mỗi lần đoán sai: The Hangman vẽ một bộ phận cơ thể và bạn chịu 1 sát thương vật chất. Mỗi lần đoán đúng: The Hangman điền các chữ cái và cho mọi người thấy tiến độ. Khi bạn giải xong trò của mình, bạn được bảo vệ khỏi giá treo cổ.',
      },
      {
        heading: 'Cách Thoát Khỏi Thòng Lọng',
        body: 'Nếu bạn bị mắc trong thòng lọng vào đầu lượt của mình, bạn có thể đổ Might 4+ để thoát ra.',
      },
    ],
    monsters: [],
  },

  70: {
    id: 70,
    title: 'To Reach the Cosmos',
    intro:
      'Một tiếng ù trong tai bạn dâng lên cho tới khi mọi suy nghĩ vang vọng như tiếng trống. Kẻ phản bội đã biến thành một con quái vật hút não cố đánh cắp các Thought của bạn bằng những chiếc Brainstraws kinh hoàng.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Lấy một tờ giấy và viết ra một "Thought" theo góc nhìn anh hùng của bạn; gấp lại để không ai khác đọc được. Bên ngoài, viết một chỉ số và tăng nó lên 1.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn đã lấy hết các Thought của kẻ phản bội.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Của Mình',
        body: 'Nếu bạn không có Thought vào đầu lượt của mình, chịu 1 xúc xắc sát thương tinh thần.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Bạn có thể đánh cắp một Thought ngẫu nhiên của kẻ phản bội qua một đòn tấn công Knowledge. Nếu một Brainstraw đánh bại bạn trong cận chiến vật chất khi bạn đang có một Thought, bạn không chịu sát thương; nếu không thì bình thường. Đánh bại một Brainstraw → nó bị choáng và rút về phòng của kẻ phản bội. Đánh bại kẻ phản bội trong cận chiến vật chất → không sát thương, nhưng bạn có thể di chuyển chúng tới một phòng có Brainstraw. Một anh hùng có thể đánh cắp một Thought từ bất cứ ai đang giữ nó qua một đòn tấn công Knowledge.',
      },
      {
        heading: 'Mất Và Nhận Thought',
        body: 'Mất một Thought → mất 1 ở chỉ số được ghi. Nhận một Thought → nhận 1 ở chỉ số của nó và đọc to nó. Bạn có thể đưa một Thought cho một anh hùng trong phòng của bạn mà không cần tấn công (bạn mất, họ nhận).',
      },
    ],
    monsters: [
      { name: 'Brainstraws', stats: 'Speed 3 · Might 5 · Sanity 5 · Knowledge 5' },
    ],
  },

  71: {
    id: 71,
    title: 'The Other Side',
    intro:
      'Đây là căn nhà của bạn — nó luôn là tổ ấm của bạn, kể từ ngày bạn treo cổ mình lên mái nhà. Người mới có thể đến rồi đi, nhưng bạn sẽ ở đây. Mãi mãi.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nếu anh hùng nào thiếu một lá Item, anh hùng đó rút một lá từ chồng Item. Nếu sau đó các anh hùng không có ít nhất bốn Item, mỗi người rút một lá cho tới khi các bạn có tổng cộng bốn lá.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Kẻ phản bội đang cố đuổi bạn ra khỏi tổ ấm của mình. Bạn có những cách đặc biệt để ngăn chúng, vì bạn là một Ghost.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Kẻ phản bội bị giết và đã gia nhập cùng bạn ở thế giới bên kia.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Của Mình',
        body: 'Cuối lượt của bạn, nhận 1 Sanity nếu bạn không tấn công trong lượt này.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Bạn có thể tấn công kẻ phản bội bằng bất kỳ chỉ số nào (chúng phòng thủ bằng chỉ số đó). Một đòn tấn công bằng chỉ số tinh thần gây sát thương tinh thần. Nếu bạn chịu sát thương, bạn phải mất Sanity thay vì Knowledge. Bạn không thể chết: nếu một chỉ số lẽ ra rơi xuống biểu tượng đầu lâu (ngưỡng tử), hãy hạ nó xuống giá trị thấp nhất phía trên đầu lâu, và đừng tự nguyện hạ thêm.',
      },
      {
        heading: 'Luật Di Chuyển Đặc Biệt',
        body: 'Bạn vô hình và miễn nhiễm với các hiệu ứng phòng tiêu cực. Trong khi di chuyển, bạn có thể mất 1 Sanity để xuyên qua tường vào một phòng đã khám phá trước đó như thể nó được nối bằng một cánh cửa.',
      },
      {
        heading: 'Luật Vật Phẩm Và Điềm Báo Đặc Biệt',
        body: 'Bạn không thể bỏ, trao đổi, hay đánh cắp các lá Item hoặc lá Omen.',
      },
    ],
    monsters: [],
  },

  72: {
    id: 72,
    title: 'Man\'s Worst Enemy',
    intro:
      'Cuốn nhật ký của một ông già cảnh báo rằng the Beast mà ông triệu hồi dưới hình dạng con cún của mình đã cắm móng vuốt vào linh hồn ông. Khi bạn đọc dòng cuối cùng, bạn nghe một tiếng sủa vui vẻ và cảm thấy một sức mạnh đang bám lấy tâm trí mình.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Để riêng các token nhà thám hiểm tương ứng cho mỗi anh hùng.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Một con quái thú địa ngục gắn với một chú cún tìm cách nuốt chửng tâm trí hoặc hủy hoại thể xác của bạn.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn giết the Beast.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'The Beast có thể tấn công bạn, nhưng sức mạnh của nó ngăn bạn tấn công nó trực tiếp — bạn chỉ có thể chống lại nó qua trò ném bắt (fetch). Mỗi lượt một lần ở phòng của the Beast, bạn có thể dùng the Bell để đổ Sanity 5+ làm choáng nó khiến nó nằm giả chết. Một anh hùng có the Cat đi cùng không thể bị ám (bỏ the Cat thay vì chịu sát thương). Bạn có thể tấn công kẻ phản bội hoặc một anh hùng bị ám như bình thường.',
      },
      {
        heading: 'Cách Chơi Fetch',
        body: 'Mỗi lượt một lần ở phòng của the Beast, đổ Knowledge 4+ để phái the Beast tới một phòng có biểu tượng Item cách tối đa 6 ô. Nếu đã có một vũ khí ở đó, the Beast mang nó về cho bạn (tấn công nó bằng vũ khí đó). Nếu không, the Beast rút một Item và mang về; nếu là vũ khí, tấn công bằng nó. Nếu bạn tấn công bằng một vũ khí được mang về và gây sát thương cho the Beast, lấy một token nhà thám hiểm của bạn. Khi các anh hùng có số token nhà thám hiểm nhiều hơn số nhà thám hiểm 1 cái, the Beast bị hạ — nhưng the Dog vẫn còn, nên lần fetch vũ khí tiếp theo bạn phải tấn công the Dog bằng nó hoặc mất tất cả token nhà thám hiểm.',
      },
    ],
    monsters: [],
  },

  73: {
    id: 73,
    title: 'Existence Precedes Essence',
    intro:
      'Một tiếng cười rúc rích điên loạn vang vọng khắp căn nhà. "Tôi vừa gặp người bạn mới và duy nhất của mình, một cái Head nhỏ đói khát... Tôi sẽ để cái Head ăn ngấu nghiến gương mặt các người!" Cái Head đó có vẻ ổn, nhưng bạn của bạn nghe có vẻ căng thẳng. Có khi anh bạn của bạn chỉ cần một cái ôm.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Để riêng số token Obstacle (Hugs) bằng hai lần số anh hùng.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn ôm kẻ phản bội đủ số lượt để cứu họ, rồi hợp sức ôm cái Head — hoặc bạn giết cả hai.',
      },
      {
        heading: 'Cách Ôm Ai Đó',
        body: 'Để ôm kẻ phản bội hoặc cái Head, thực hiện một đòn tấn công Might. Khi ôm kẻ phản bội, thêm 1 xúc xắc cho mỗi Hug trên thẻ của họ. Bất kỳ anh hùng nào trong vòng 2 ô có thể ôm tập thể (đặt quân của họ vào phòng bạn, +1 xúc xắc mỗi người). Ôm không gây sát thương nhưng cho phép đánh cắp bình thường các vật phẩm đang mang (token nhà thám hiểm tính là Item). Để cứu kẻ phản bội, ôm họ số lượt bằng hai lần số anh hùng (đặt một Hug lên thẻ của họ sau mỗi lần thành công). Nếu cái Head ở một mình, bạn có thể ôm nó; kẻ phản bội đã được cứu có thể tham gia.',
      },
      {
        heading: 'Luật Di Chuyển Đặc Biệt',
        body: 'Khi bạn ôm trong lượt của mình, bạn không được di chuyển lại trong lượt đó.',
      },
    ],
    monsters: [],
  },

  74: {
    id: 74,
    title: 'Coulrophobia',
    intro:
      'Tiếng cười vang vọng dọc hành lang, khơi dậy một ký ức tuổi thơ kinh hoàng về một gã hề điên loạn. Một bóng hình đáng sợ với những dụng cụ tra tấn đang rình rập trong căn nhà. Chạy đi giữ mạng, nếu không gã hề ác độc sẽ tóm được bạn.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Để riêng các token Might Roll và token Knowledge Roll, mỗi loại bằng số anh hùng. Mỗi anh hùng chọn một tờ Gag của kẻ phản bội (giấu những tờ không được chọn vào hộp).',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Anh hùng cuối cùng còn sống thoát khỏi căn nhà, bạn giết the Clown, hoặc tất cả các Gag của the Clown bị phá hủy. Tuy nhiên, bạn thua nếu hai người trong các bạn bị giết.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Khi bạn tấn công the Clown, bạn có thể dùng luật Đánh Cắp Item để đánh cắp một Gag (do the Clown chọn). Bạn cũng có thể tấn công the Dog để làm choáng nó hoặc, nếu nó đang mang một Gag, để đánh cắp Gag đó. Một Gag bị đánh cắp sẽ lập tức bị phá hủy.',
      },
      {
        heading: 'Cách Rời Khỏi Căn Nhà',
        body: 'Mỗi lượt một lần, một anh hùng ở Entrance Hall có thể đổ Might 5+ để bẻ xích hoặc đổ Knowledge 5+ để cạy khóa. Khi thành công, thêm một token vào Entrance Hall. Khi có số token bằng số anh hùng, cửa được mở khóa. Bắt đầu lượt của bạn ở Entrance Hall với cửa đã mở khóa thì bạn có thể trốn thoát.',
      },
    ],
    monsters: [],
  },

  75: {
    id: 75,
    title: 'Let It Glow',
    intro:
      'Một lớp băng mỏng bắt đầu phủ lên từng centimet của căn nhà. Người bạn cũ của bạn đã biến thành một Ice Queen cay nghiệt. Hãy sưởi ấm căn nhà trở lại trước khi bạn chết cóng — trừ khi Queen giết bạn trước.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Để riêng 7 token Item hình ngũ giác (Thermostats). Đặt một cái mặt số ngửa lên ở Furnace Room, và một cái nữa ở mỗi phòng có biểu tượng Omen do bạn chọn cho tới khi hết Thermostat hoặc hết phòng Omen.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn giết kẻ phản bội, hoặc khóa sáu Thermostat và hạ thanh Lượt/Sát thương về 0.',
      },
      {
        heading: 'Cách Rã Đông Căn Nhà',
        body: 'Mỗi lượt một lần, đổ Knowledge 4+ để nâng và khóa một Thermostat. Khi đã khóa, lật token của nó mặt số úp xuống và hạ thanh Lượt/Sát thương. Nếu một nhà thám hiểm khám phá một phòng Omen, đặt một Thermostat ở đó nếu bạn vẫn còn cái chưa dùng.',
      },
    ],
    monsters: [],
  },
};
