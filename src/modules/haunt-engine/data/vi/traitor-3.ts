import type { HauntStory } from '../../types';

export const TT_VI_3: Record<number, HauntStory> = {
  52: {
    id: 52,
    title: 'Prism',
    intro:
      'Cánh cửa sập đóng lại phía trên bạn. Hồ sơ cho Nhóm 22B đang chờ trên bàn. Bạn ngồi xuống chiếc ghế xoay yêu thích và bấm nút "Begin Experiment".',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn vẫn còn trong ván nhưng đã trở thành kẻ phản bội và không còn ở trong căn nhà — bỏ quân của bạn ra và bỏ các lá bài của bạn. Bạn là chủ nhân của prism, điều khiển các Bẫy của nó. Đổ 2 xúc xắc để chọn một Dãy Toán Học (đừng tiết lộ). Đặt 24 token Obstacle (Bẫy) ngửa lên, mỗi phòng không phải landing một token (để phần dư sang một bên). Trên giấy, chọn một phòng có chứa token nằm trong dãy của bạn làm phòng lối thoát, ghi lại và giấu nó đi. Di chuyển các phòng mà anh hùng đang đứng sang vị trí mới (đừng di chuyển phòng lối thoát nếu có anh hùng trong đó; nối cửa khi có thể và giữ một đường đi từ phòng lối thoát tới landing của tầng đó). Đặt thanh Lượt/Sát thương về 6.',
      },
      {
        heading: 'Dãy Toán Học',
        body: '0 Bội của Ba: 3, 6, 9, 12, 15, 18, 21, 24. 1 Fibonacci: 1, 2, 3, 5, 8, 13, 21. 2 Bội của Bốn: 4, 8, 12, 16, 20, 24. 3 Số Nguyên Tố: 2, 3, 5, 7, 11, 13, 17, 19, 23. 4 Lũy Thừa của 2: 1, 2, 4, 8, 16.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ sẽ cố tìm ra phòng nào là lối thoát và đến đó trước khi hết giờ.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đã chết, hoặc hết giờ trước khi họ tìm được phòng lối thoát.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Của Mình',
        body: 'Hạ thanh Lượt/Sát thương; khi về 0 thì haunt kết thúc. Sau khi hạ, nhấc các phòng mà anh hùng đang đứng lên và di chuyển sang chỗ khác (nối cửa khi có thể, giữ một đường đi từ phòng lối thoát tới landing của nó; đừng di chuyển phòng lối thoát nếu có anh hùng trong đó).',
      },
      {
        heading: 'Kích Hoạt Bẫy',
        body: 'Khi một anh hùng vào phòng có token Bẫy, nếu số của nó nằm trong dãy của bạn thì phòng đó an toàn — lật token sang mặt trống. Nếu không, gỡ token ra và đổ một xúc xắc: 0 anh hùng bị tấn công Knowledge (bạn thắng → 1 sát thương tinh thần và kết thúc mọi di chuyển); 1 tấn công Speed (bạn thắng → 1 sát thương vào một chỉ số do anh hùng chọn và kết thúc mọi di chuyển); 2 tấn công Might, không dùng vũ khí (bạn thắng → 1 sát thương vật chất và kết thúc mọi di chuyển).',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Bạn không thể nhận sát thương.',
      },
      {
        heading: 'Luật Di Chuyển Đặc Biệt',
        body: 'Nếu bạn để dư token Obstacle nào lúc đầu, đặt một token vào mỗi phòng mới khi nó được khám phá.',
      },
    ],
    monsters: [],
  },

  53: {
    id: 53,
    title: 'Till Morning Light',
    intro:
      '"Cho chúng tôi vào! Chúng tôi chỉ muốn giết các người thôi!" những giọng nói gào lên. Trong đêm Surge, việc giết bất kỳ ai bạn muốn là hợp pháp trong một đêm. Nếu bạn cho họ vào, chắc chắn họ sẽ chỉ giết những người khác thôi. Đến lúc mở vài cánh cửa rồi...',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn vẫn còn trong ván nhưng đã trở thành kẻ phản bội. Để sang một bên các token quái vật nhỏ màu xanh dương (Surgers) đánh số từ 1 đến 9.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đã chết.',
      },
      {
        heading: 'Cách Cho Surgers Vào',
        body: 'Trong lượt của bạn, tại bất kỳ phòng tầng trệt nào có cửa chưa nối với phòng nào, đổ 3 xúc xắc (bớt 1 xúc xắc cho mỗi anh hùng trong phòng). Nếu ra 3+ thì đặt một Surger vào phòng. Tại Entrance Hall với lá Key, bạn đặt token một cách tự động.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Quái Vật',
        body: 'Cuối lượt quái vật, tăng thanh Lượt/Sát thương. Khi nó đạt 5, haunt kết thúc.',
      },
      {
        heading: 'Luật Di Chuyển Đặc Biệt',
        body: 'Surgers không thể vượt qua một Lock trừ khi có ba Surgers trở lên ở một hoặc cả hai phía của nó (khi đó gỡ Lock khỏi cửa). Surgers không thể dùng dumbwaiter.',
      },
    ],
    monsters: [
      {
        name: 'Surgers',
        stats: 'Speed 3 · Might 6* · Sanity 3 · Knowledge 3 (*+1 Might cho mỗi Surger khác trong cùng phòng, tối đa 8 xúc xắc)',
      },
    ],
  },

  54: {
    id: 54,
    title: 'Monster Mash',
    intro:
      'Bạn đang làm việc trong phòng lab khuya một đêm... Bạn đã chuẩn bị buổi tiệc này hàng tháng trời — đặt ban nhạc The Cryptkicker Five, lấp đầy căn nhà bằng những hành khách xe buýt bị kẹt. Nhưng những nạn nhân này lại chống cự thay vì co rúm sợ hãi!',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn vẫn còn trong ván nhưng đã trở thành kẻ phản bội. Nếu Ballroom chưa có trong ván, tìm nó trong chồng phòng, đặt nó vào và xáo lại. Với mỗi phòng trong Danh Sách Khách đang có trong ván, đặt token quái vật được ghi chú vào đó. Nếu có ít hơn ba quái vật trong ván, tìm trong chồng phòng đủ số phòng khởi đầu quái vật cho ba quái vật, đặt vào và xáo lại.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Các anh hùng nghĩ rằng họ có thể tìm thấy đồ trong nhà để tiêu diệt các vị khách của bạn. Hãy tiêu diệt họ trước.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đã chết, hoặc có ít nhất bốn quái vật trong Ballroom.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Của Mình',
        body: 'Khi bạn sắp khám phá một phòng, rút năm phòng tiếp theo của tầng đó, chọn một, và đặt bốn phòng còn lại xuống đáy chồng phòng theo thứ tự tùy ý.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Bạn không thể bị tấn công.',
      },
      {
        heading: 'Luật Di Chuyển Đặc Biệt',
        body: 'Khi một phòng trong Danh Sách Khách được bất kỳ ai khám phá, đặt quái vật của nó vào đó. Khi bạn di chuyển một quái vật, nếu có anh hùng trong tầm nhìn thì bạn phải di chuyển nó về phía anh hùng nhìn thấy được; nếu không thì di chuyển nó theo đường ngắn nhất về phía Ballroom (bao gồm Coal Chute, dumbwaiter, v.v.). Một khi quái vật vào Ballroom thì nó ở lại đó.',
      },
      {
        heading: 'Danh Sách Khách',
        body: 'Bloody Room → Crimson Jack (Speed 3 / Might 7 / Sanity 2; nếu bị choáng, di chuyển về Entrance Hall). Chasm → Banshee (4 / 7 / 5; luôn tấn công bằng Sanity). Crypt → Dracula (3 / 6 / 4; anh hùng bắt đầu lượt trong phòng của hắn phải tốn thêm một ô để ra khỏi phòng). Graveyard → Zombie Lord (2 / 6 / 4; anh hùng bị đánh bại nhưng không chết sẽ trở thành kẻ phản bội). Library → Mummy (2 / 6 / 5; gây 1 sát thương vật chất nếu bị làm tổn thương trong một đợt tấn công). Operating Laboratory → Frankenstein\'s Monster (2 / 8 / 3; miễn nhiễm với tấn công Speed). Pentagram Chamber → Demon Lord (3 / 6 / 4; không thể nhận sát thương trong một đợt tấn công; có thể tấn công từ phòng nối liền). Widow\'s Walk → Witch (3 / 5 / 5; có thể tấn công bằng Might hoặc Sanity).',
      },
    ],
    monsters: [],
  },

  55: {
    id: 55,
    title: 'She Is Not Amused',
    intro:
      '"Tỉnh dậy đi, Medusa! Tỉnh dậy và kết thúc thời đại của loài người!" Bạn kéo mũ trùm xuống và, lần đầu tiên sau hàng thiên niên kỷ, lũ rắn mọc ra từ mái tóc bạn. Bạn sẽ biến hậu duệ của Perseus thành những bạn đồng hành vĩnh cửu, đông cứng trong đá.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn vẫn còn trong ván nhưng đã trở thành kẻ phản bội. Nếu Statuary Corridor chưa có trong ván, tìm nó trong chồng phòng, đặt vào và xáo lại. Đặt quân của bạn vào Statuary Corridor. Đặt một token quái vật nhỏ màu cam (Statue) úp xuống trong mỗi phòng có biểu tượng item hoặc omen. Nếu lá Armor chưa có trong ván, tìm trong chồng item và chồng bài bỏ, lấy nó, rồi xáo chồng bài bỏ trở vào chồng item. Nhận 2 Might và 1 Speed. Để sang một bên các token Might Roll và token Sanity Roll, mỗi loại bằng số anh hùng.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ là con cháu của Perseus và phải bị hóa đá.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đã chết hoặc bị hóa đá.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Nếu bạn gây sát thương vật chất trong một đợt tấn công, đưa cho nhà thám hiểm đó một token Might Roll (họ mất 1 Might vào cuối mỗi lượt của họ, trừ khi đang bị hóa đá). Trong lượt của bạn, nếu không có nhà thám hiểm nào trong phòng bạn, bạn có thể nhìn chằm chằm: chọn một lối ra, và tất cả anh hùng trong tầm nhìn phải đổ Sanity 4+ nếu không sẽ bị hóa đá (đưa cho họ một token Sanity Roll; họ không thể di chuyển hay hành động cho đến khi hết hóa đá). Bạn không thể vừa tấn công vừa nhìn chằm chằm trong cùng một lượt.',
      },
      {
        heading: 'Cách Bạn Hồi Phục',
        body: 'Vào cuối lượt của bạn, nếu Might của bạn thấp hơn giá trị khởi đầu và bạn không nhận sát thương vật chất nào trong lượt này từ một nhà thám hiểm có gương, nhận 1 Might.',
      },
    ],
    monsters: [],
  },

  56: {
    id: 56,
    title: 'Make America Disintegrate Again',
    intro:
      'Khuôn mặt sáp của hắn bong ra để lộ giòi bọ và hốc mắt rỗng toác, vậy mà những lời lạnh lùng của hắn giờ lại hoàn toàn hợp lý với bạn. Hắn là người sẽ làm cho đất nước này vĩ đại trở lại — ngay khi hắn hoàn thành Nghi Lễ Thăng Thiên. Bạn bè của bạn phải nhìn thấy sự thật. Bạn sẽ bắt họ thấy.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn vẫn còn trong ván nhưng đã trở thành kẻ phản bội. Bạn là quản lý chiến dịch tranh cử cho một Lich đang chạy đua làm tổng thống. Để sang một bên Madman (Lich) và đặt một token Obstacle (Power) lên nó. Đặt ba token item hình ngũ giác (Phylacteries) bất kỳ đâu trong nhà. Từ giờ trở đi bạn chỉ được nói bằng những khẩu hiệu chính trị khoa trương.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ đang cố ngăn chặn nghi lễ.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đã chết hoặc là kẻ phản bội, hoặc có hai mươi token Power chồng lên lá Madman, hoàn thành Nghi Lễ Thăng Thiên.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Của Mình',
        body: 'Vào cuối mỗi lượt của kẻ phản bội ban đầu, thêm một token Power lên lá Madman cho mỗi kẻ phản bội còn sống, kể cả bạn.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Kẻ phản bội giờ gây toàn bộ sát thương vào Sanity. Một anh hùng bị giảm xuống 0 Sanity sẽ trở thành kẻ phản bội (đặt lại chỉ số), chỉ nói bằng những khẩu hiệu sáo rỗng. Khi tấn công, kẻ phản bội có thể đưa ra Lựa Chọn: gây sát thương cho mục tiêu, hoặc chia đều cho các anh hùng còn lại (làm tròn lên); nếu Lựa Chọn được chấp nhận, nhận 1 Sanity. Thay vì gây sát thương, bạn có thể buộc nhà thám hiểm di chuyển bấy nhiêu ô khỏi phòng của họ (bạn chọn vị trí).',
      },
      {
        heading: 'Nếu Bạn Sắp Bị Giảm Xuống 0 Sanity',
        body: 'Bạn dừng ở mức 1 điểm trên biểu tượng đầu lâu (ngưỡng tử) Sanity của bạn.',
      },
    ],
    monsters: [],
  },

  57: {
    id: 57,
    title: 'The Gathering Storm',
    intro:
      'Haunt này không có kẻ phản bội — chỉ có các anh hùng. Tất cả các bạn đang cố thoát khỏi căn nhà. Phần luật còn lại nằm trong Secrets of Survival.',
    sections: [
      {
        heading: 'Tìm Luật Ở Đâu',
        body: 'Kịch bản này không có kẻ phản bội; toàn bộ luật nằm trong cuốn Secrets of Survival.',
      },
    ],
    monsters: [],
  },

  58: {
    id: 58,
    title: 'Olly Olly Oxen Free',
    intro:
      'Linh hồn của một bé gái cười khúc khích và nhảy vào trong cơ thể bạn. Ký ức lóe lên về một ván Trốn Tìm mà người duy nhất đến tìm bạn lại là cái chết. Trong cơ thể mới này, bạn có thể chơi cho hết ván của mình...',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn vẫn còn trong ván nhưng đã trở thành kẻ phản bội. Để sang một bên các token item hình ngũ giác (Dolls) bằng số nhà thám hiểm — những người bạn duy nhất mà bạn được chơi cùng cho đến giờ.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ đang chơi ván của bạn dù muốn hay không. Họ đang cố trốn khỏi bạn; nếu bạn tìm thấy họ, họ trở thành "It".',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng bị tìm thấy và trở thành "It".',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Anh hùng luôn đang ẩn nấp khi ở trong một phòng; để tìm họ bạn phải tấn công Knowledge. Đánh bại một anh hùng theo cách này thì họ bị tìm thấy, trở thành "It", trở thành kẻ phản bội, và bắt đầu đi tìm các anh hùng khác. Một anh hùng trở thành "It" sẽ làm rơi một Doll nếu đang cầm, và đọc Traitor\'s Tome. Anh hùng không thể gây sát thương cho kẻ phản bội.',
      },
      {
        heading: 'Đi Tìm',
        body: 'Anh hùng luôn đang đi tìm. Khi một anh hùng tìm thấy một Doll, đưa cho anh hùng đó một token item. Bạn không thể nhặt hay trộm một Doll; làm vậy là gian lận.',
      },
    ],
    monsters: [],
  },

  59: {
    id: 59,
    title: "The Fleshchild's Alchemical Mandate",
    intro:
      'Bạn nhận ra Philosopher\'s Stone mà chủ nhân đã ấn vào xương ức bạn khi ông ấy ban cho bạn sự sống. Lão giả kim Zosimus Alchemista đáng kính đã tạo ra bạn để thu thập mẫu vật. Bạn là Fleshchild của ông ấy, và bạn có thể quay lại công việc của mình giờ khi bạn đã nhớ ra mình là ai.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn không còn trong ván nữa, nhưng một kẻ rất giống bạn thì vẫn còn. Lật lá nhân vật của bạn lại, đặt chỉ số của bạn theo giá trị khởi đầu ở mặt mới, rồi tăng mỗi chỉ số thêm bằng số anh hùng.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ biết bạn là gì. Bạn phải thu thập mẫu vật (Flesh) từ mỗi người trong số họ cho chủ nhân của bạn.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn có tất cả Flesh trên lá nhân vật của mình, hoặc tất cả anh hùng đã chết.',
      },
      {
        heading: 'Cách Thu Hoạch Flesh',
        body: 'Mỗi anh hùng bắt đầu với một token quái vật màu cam (một cân Flesh) trên lá của họ. Khi bạn bắt đầu lượt trong một phòng có một hoặc nhiều Flesh, nhặt một và đặt lên lá của bạn. Flesh được tính là một item và có thể bị làm rơi hoặc bị trộm, nhưng không thể trao đổi.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Khi bạn đánh bại một anh hùng có Flesh trên lá của họ, tăng sát thương bạn gây cho anh hùng đó thêm 1.',
      },
      {
        heading: 'Luật Di Chuyển Đặc Biệt',
        body: 'Khi bạn thêm Flesh vào lá của mình, bạn có thể di chuyển ngay lên đến số ô bằng Speed của bạn. Khi bạn bắt đầu lượt trong một phòng có token quái vật màu cam, nhặt một Flesh.',
      },
    ],
    monsters: [],
  },

  60: {
    id: 60,
    title: "Cat O'Clock",
    intro:
      'Bạn nhìn sâu vào đôi mắt đầy tâm hồn của con mèo và nhận ra mình sẽ làm bất cứ điều gì cho The Cat. The Cat đã tỉnh giấc nhưng bị nhốt trong nhà. Nó cần bạn cho tất cả lũ mèo con vào — rồi nó có thể chiếm lĩnh thế giới.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn vẫn còn trong ván nhưng đã trở thành kẻ phản bội. Tăng cả hai chỉ số vật chất thêm 2 và hạ cả hai chỉ số tinh thần đi 2 (không thấp hơn giá trị thấp nhất trên ngưỡng đầu lâu). Để sang một bên sáu token Sanity Roll. Đặt một token Cat hình tròn lớn vào phòng reveal. Đặt các token quái vật màu đỏ (Kittens): hai nếu có 2–3 anh hùng, ba nếu có 4–5 anh hùng. Đổ 2 xúc xắc hai lần trên bảng Cat Name để đặt tên cho The Cat; luôn dùng tên này.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Các anh hùng đang cố dỗ dành lũ Kittens và khiến chúng quên đi việc thống trị thế giới.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đã chết, hoặc The Cat thoát khỏi căn nhà qua cửa trước ở Entrance Hall.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Của Mình',
        body: 'Bạn có thể tốn 1 ô di chuyển để thử đổ Might 3+ nhằm mở một cửa sổ hoặc ngăn kéo trong phòng của bạn. Nếu thành công, đặt một token Sanity Roll vào phòng (bạn đã mở nó) và đặt một Kitten vào phòng. Nếu cả sáu token Sanity Roll đều đã ở trong nhà, chọn một và chuyển nó về phòng hiện tại của bạn.',
      },
      {
        heading: 'Những Người Bạn Mèo Mới Của Bạn',
        body: 'Kittens không cản trở di chuyển, nhưng gây 1 sát thương vật chất cho bất kỳ anh hùng nào vào phòng của chúng (một Kitten đã được dỗ dành thì không). Trong lượt quái vật, mỗi Kitten di chuyển 4 ô (không bao giờ chung phòng); khi vào phòng có anh hùng, nó gây 1 sát thương vật chất cho một anh hùng. Vào đầu lượt của The Cat, đếm số Kittens chưa được dỗ dành và chia hai (làm tròn xuống); Speed và Might của The Cat tăng thêm bấy nhiêu trong lượt đó. Để thoát ra, The Cat phải thành công đổ Might 6+, mỗi lượt một lần.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Nếu bạn bị tấn công, bạn có thể đặt một Kitten vào bất kỳ phòng nào chưa có Kitten.',
      },
    ],
    monsters: [{ name: 'The Cat', stats: 'Speed 0 · Might 3 · Sanity 6 · Knowledge 6' }],
  },

  61: {
    id: 61,
    title: "Captain Sting's Revenge",
    intro:
      'Biển tách ra thành một cánh cổng và bạn thấy mình ở trong Underground Sea. "Chuẩn bị chinh phục vùng đất này và vơ vét tất cả chiến lợi phẩm các ngươi tìm được!" Việc đầu tiên bạn làm là tàn sát kẻ đã mở chiếc rương báu mà bạn tìm kiếm bấy lâu.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn đã chết — bỏ quân của bạn ra và bỏ các lá bài của bạn. Đặt token Pirate Queen hình tròn lớn (Captain Sting) vào phòng bạn đang đứng. Nếu Underground Lake chưa có trong ván, tìm nó trong chồng phòng, đặt vào tầng hầm và xáo lại. Đặt Box (Treasure Chest) vào Underground Lake. Đặt các token quái vật màu đỏ tía (Pirates) bằng số anh hùng vào Underground Lake.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ là dân cạn; họ thắng nếu Treasure Chest bị phá hủy trong Underground Lake.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đã chết, hoặc bạn đã thu được số Piece of Loot bằng số anh hùng và đưa chúng trở về Treasure Chest.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Của Mình',
        body: 'Nếu bạn hoặc một Pirate mang một Piece of Loot tới Treasure Chest, đổ 1 xúc xắc; nếu ra 1 trở lên, đặt Piece of Loot vào Chest.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Captain Sting có thể trộm một lá item trong bất kỳ đợt tấn công nào, thắng hay thua, đang tấn công hay bị tấn công. Pirates chỉ cần gây 1 điểm sát thương là trộm được.',
      },
      {
        heading: 'Luật Di Chuyển Đặc Biệt',
        body: 'Captain Sting di chuyển dùng Speed của ả và không đổ xúc xắc để di chuyển. Pirates (kể cả Sting) chỉ mang được một Piece of Loot tại một thời điểm; khi đang mang một Piece, chúng di chuyển bớt 1 ô.',
      },
    ],
    monsters: [
      { name: 'Captain Sting', stats: 'Speed 5 · Might 8 · Sanity 5 · Knowledge 4' },
      { name: 'Pirates', stats: 'Speed 4 · Might 3 · Sanity 4 · Knowledge 2' },
    ],
  },

  62: {
    id: 62,
    title: 'Rosencrantz and All of You Are Dead',
    intro:
      'Một làn sóng năng lượng huyền bí tràn qua bạn. Bạn đang mặc trang phục thời Elizabeth với một chiếc vương miện trên đầu. Tên bạn giờ là Hamlet và bạn thích nói to một mình rất nhiều.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn vẫn còn trong ván nhưng đã trở thành kẻ phản bội. Tăng bất kỳ chỉ số nào thấp hơn Speed của bạn lên bằng giá trị Speed của bạn.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Lũ khốn đó đã giết cha của bạn, Vua xứ Đan Mạch. Bạn sẽ trả thù rồi chết với một cảnh tử đầy ấn tượng — nếu họ không hối hả lao qua năm hồi kịch trước.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn đọc thoại của mình và chết vào cuối một cuộc đấu, hoặc tất cả anh hùng đã chết.',
      },
      {
        heading: 'Cách Chết',
        body: 'Khiến cho các nhà thám hiểm giết bạn, nhưng trước hết phải đọc thoại của bạn theo thứ tự. 1. Đi tới phòng có token item 1 (Mirror): "O, that this too solid flesh would melt!" 2. Đi tới phòng có token item 2 (Dagger): "To be, or not to be: That is the question." 3. Để bị giết: "O, I die, Horatio! ... The rest is silence." Đọc câu này khi bạn chết là bạn thắng.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Sau khi bạn tấn công một anh hùng, nếu anh hùng còn sống thì họ tấn công lại bạn ngay. Bạn chỉ có thể chết do tấn công hoặc bị tấn công; trong mọi trường hợp khác, nếu bạn sắp chết thì hạ chỉ số đó về giá trị thấp nhất trên biểu tượng đầu lâu (ngưỡng tử).',
      },
      {
        heading: 'Luật Gieo Vần Đặc Biệt',
        body: 'Khi bạn thực hiện một hành động, nếu bạn mô tả nó bằng một câu có vần điệu thì bạn được +2 vào lần đổ hoặc +2 vào chỉ số liên quan. Mỗi lượt một lần.',
      },
    ],
    monsters: [],
  },

  63: {
    id: 63,
    title: 'Shush',
    intro:
      'Bạn lột mặt nạ người ra, để lộ hình dạng thật của mình — một nàng tiên độc ác sống nhờ những trái tim người. Bạn đặt Voicebox xuống và bắt đầu công việc. Giờ thì không ai có thể nghe thấy họ gào thét nữa.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Đặt lá Box (Voicebox) cạnh phòng của bạn. Chọn một số từ 1–6: đó là số Spellbooks không bị nguyền mà các anh hùng phải thu thập để có thể làm tổn thương bạn và phá hủy Box. Cứ mỗi bậc từ số của bạn đến 6, thêm 1 vào một trong các chỉ số của bạn (không nhất thiết cùng một chỉ số). Đặt sáu token item hình ngũ giác (Spellbooks) úp xuống ở các phòng khác nhau. Trên giấy, ghi lại token nào đại diện cho các Spellbooks bị nguyền.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ phải thắng nhưng không biết bằng cách nào. Bạn nắm giữ chìa khóa chiến thắng của họ; họ phải tự kiếm lấy.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đã chết.',
      },
      {
        heading: 'Những Hạn Chế Đối Với Nhà Thám Hiểm',
        body: 'Các anh hùng không thể nói chuyện với nhau cho đến khi họ lấy lại được giọng nói. Một khi bạn tiếp tục ván chơi, mỗi lần một anh hùng nói thành tiếng, họ nhận 1 xúc xắc sát thương vào một chỉ số do họ chọn (cười khúc khích hay cười rúc rích không tính).',
      },
      {
        heading: 'Khi Một Anh Hùng Thu Thập Một Spellbook',
        body: 'Kiểm tra số trên token. Nếu nó khớp với một Spellbook bị nguyền, nó phát nổ — anh hùng nhận 1 xúc xắc sát thương vật chất và gỡ token đi. Nếu nó khớp với một Spellbook không bị nguyền, anh hùng nhận token.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Nếu một anh hùng tấn công bạn trước khi cả nhóm thu thập đủ số Spellbooks, hãy diễn cho có nhưng không nhận sát thương (bạn vẫn có thể làm tổn thương anh hùng).',
      },
      {
        heading: 'Tương Tác Với Voicebox',
        body: 'Cho đến khi các anh hùng thu thập đủ số Spellbooks, không ai (kể cả bạn) có thể nhặt hay phá hủy Voicebox. Sau khi họ làm được, một anh hùng trong phòng có thể nhặt hoặc phá hủy nó; nếu bị phá hủy, gỡ Box đi, các anh hùng lấy lại giọng nói, bạn nhận 1 xúc xắc sát thương vào mỗi chỉ số, và các anh hùng giờ có thể làm tổn thương bạn (bạn không cần phải nói cho họ biết điều đó).',
      },
    ],
    monsters: [],
  },

  64: {
    id: 64,
    title: 'Chairman of the Board',
    intro:
      'Vị khách mới nhất của bạn tưởng các bạn chỉ là những công dân tò mò. Họ đâu biết các bạn vốn đã là những poltergeist, những cư dân vĩnh viễn bị ràng buộc với việc gia tăng số lượng. Loại chủ nhà gì lại để khách rời đi trước khi tư cách cư trú của họ được đảm bảo chứ?',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Các nhà thám hiểm của bạn vẫn còn trong ván nhưng tất cả đều đã trở thành kẻ phản bội — các quân của bạn vẫn còn, nhưng bạn là Poltergeists. Đặt quân của anh hùng vào bất kỳ phòng tầng hầm hoặc mái nào không bị một rào cản ngăn cách khỏi căn nhà (nếu có Poltergeist ở đó, hoán đổi chỗ). Lấy ít giấy. Quan sát kỹ chi tiết của mọi mảnh phòng.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Anh hùng đang cố thoát qua cửa trước của Entrance Hall. Nếu họ thành công, bạn mất cơ hội thêm họ vào làm cư dân ma quái.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Anh hùng chết.',
      },
      {
        heading: 'Luật Di Chuyển Đặc Biệt',
        body: 'Bạn di chuyển xuyên tường như thể chúng là cửa ra vào (không xuyên qua sàn/trần), và tự do lên/xuống Coal Chute, Collapsed Room, và Gallery. Bạn bỏ qua chữ trên phòng về chỉ số vật chất hoặc sát thương vật chất. Bạn không thể khám phá phòng mới hay dùng Mystic Elevator hoặc dumbwaiter. Bạn có thể dùng các lá item/omen của mình nhưng không thể trao đổi hay thu được chúng.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Bạn không thể tấn công bình thường. Thay vào đó, kết thúc di chuyển trong phòng của anh hùng và ném một thứ gì đó: viết tên một vật được vẽ trên mảnh phòng (một hoặc hai từ, từ 6 chữ cái trở lên, không quá hiểm hóc), rồi tấn công Sanity (anh hùng phòng thủ theo Secrets of Survival). Trả lời câu hỏi một cách trung thực. Nếu bạn gây sát thương, bạn có thể thay vào đó di chuyển anh hùng bấy nhiêu phòng (một nước đi hợp lệ). Khi phòng thủ, bạn chỉ dùng Sanity hoặc Knowledge; sát thương vật chất lên bạn trở thành sát thương tinh thần.',
      },
      {
        heading: 'Luật Tử Vong Đặc Biệt',
        body: 'Bạn không thể bị giết thật sự. Nếu bạn chết, gỡ quân của bạn ra và mất tất cả lá item; vào đầu lượt tiếp theo của bạn, đặt mình vào Dungeon, Rookery, Study, hoặc Theater, đặt lại các chỉ số, và không di chuyển trong lượt đó.',
      },
    ],
    monsters: [],
  },

  65: {
    id: 65,
    title: 'Sushi Night',
    intro:
      'Nước chảy ra từ những bức tường và một cơn đau nhói chạy dọc chân bạn. Dù bạn có thích hay không, vây cá của bạn đã trở lại. Bạn giờ là một Merperson.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn vẫn còn trong ván nhưng đã trở thành kẻ phản bội (một Merperson nhìn chung vốn yêu hòa bình). Tăng Speed của bạn lên giá trị tối đa. Để sang một bên ba token nhà thám hiểm của bạn. Đặt token Fountain vào bất kỳ phòng tầng hầm nào và đặt quân của bạn vào đó. Bắt đầu từ phòng Fountain, đặt các token quái vật nhỏ úp xuống (Flood) bằng số nhà thám hiểm lên các phòng, mỗi phòng một token. Một khi mọi phòng trên một tầng đã bị ngập, đặt các token Flood dư lên tầng tiếp theo phía trên.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ đang săn bạn. Trông họ có vẻ đói.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Toàn bộ căn nhà bị ngập và bạn thoát ra biển — hoặc bạn biến trở lại thành người, nên họ không còn lý do để săn bạn.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Sau Lượt Của Mỗi Nhà Thám Hiểm',
        body: 'Đặt một token Flood vào một phòng chưa ngập. Sau lượt của nhà thám hiểm bên phải bạn, làm ngập ba phòng thay vì một. Làm ngập tầng thấp nhất chưa ngập hoàn toàn; tràn lên tầng tiếp theo phía trên.',
      },
      {
        heading: 'Luật Di Chuyển Đặc Biệt',
        body: 'Nếu bạn di chuyển vào một phòng không có token Flood, bạn phải dừng di chuyển. Nếu bạn kết thúc lượt mà không từng ở trong một phòng Flood, đặt một token nhà thám hiểm lên lá của bạn; ở ba token thì vây của bạn khô đi và bạn trở thành người. Một khi một tầng đã ngập hoàn toàn, các phòng được khám phá ở đó cũng bị ngập.',
      },
    ],
    monsters: [],
  },

  66: {
    id: 66,
    title: 'The Cardinal Sins',
    intro:
      '"Hôm nay, nếu mọi việc đúng kế hoạch, ta sẽ được bầu làm Giáo Hoàng! Để đảm bảo cuộc bầu cử không bị tranh cãi, ta sẽ nhấn chìm căn nhà này trong máu của những kẻ tội lỗi!" Không có vị hồng y nào xứng đáng với ngôi Giáo Hoàng hơn Cardinal Sinn huyền thoại.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn vẫn còn trong ván nhưng đã trở thành kẻ phản bội. Tăng các chỉ số của bạn thêm tổng cộng 5 điểm. Đặt quân của bạn vào bất kỳ landing nào.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ đang cố ngăn bạn lên ngôi Giáo Hoàng. Các Cử Tri (token quái vật nhỏ) ở quanh nhà, mỗi người một lá phiếu; hãy biện hộ cho mình bằng cách trừng phạt các anh hùng vì tội lỗi của họ.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đã chết, hoặc bạn đang ở trên mái để phun làn khói trắng và bạn có bốn Cử Tri trở lên trên lá nhân vật của bạn.',
      },
      {
        heading: 'Cách Lên Án Một Tội Lỗi',
        body: 'Mỗi lượt một lần, trong một phòng có Cử Tri, thay vì tấn công bạn có thể lên án tội lỗi mang màu của Cử Tri đó. Lên án anh hùng gần nhất ("Ta rút phép thông công ngươi vì tội [tên]"), rồi tấn công theo bảng Cử Tri. Nếu bạn gây sát thương, trộm một lá item ngẫu nhiên và đặt Cử Tri lên lá của bạn. Với Ceremonial Robe, tấn công hai anh hùng gần nhất theo cùng cách, chỉ nhận một Cử Tri ngay cả khi bạn làm tổn thương cả hai.',
      },
      {
        heading: 'Cử Tri',
        body: 'Đỏ (Wrath) tấn công bằng Might. Cam (Gluttony) bằng Sanity. Vàng (Sloth) bằng Speed. Lục (Envy) bằng chỉ số thấp nhất của anh hùng. Lam (Greed) bằng chỉ số cao nhất của anh hùng. Tím (Pride) bằng Knowledge. Đỏ tía (Lust) bằng chỉ số cao nhất của bạn.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Trừ khi bạn có bốn Cử Tri trở lên, bạn không thể nhận sát thương tinh thần hay vật chất. Tuy nhiên, một anh hùng có thể trộm một lá item từ bạn khi lẽ ra họ gây cho bạn 2 sát thương vật chất trở lên bằng một đợt tấn công.',
      },
    ],
    monsters: [],
  },

  67: {
    id: 67,
    title: 'Murderball',
    intro:
      'Một cậu bé hồn ma với cái ná thun hét lên: "Tóm được rồi! Cấm tóm lại!" Rồi cái ná thun và viên bloodstone hiện ra trong tay bạn. Bạn có nhiều mục tiêu, và chúng chảy máu rất đẹp khi bạn bắn trúng.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn vẫn còn trong ván nhưng đã trở thành kẻ phản bội. Nếu một anh hùng có lá Bloodstone, hãy lấy nó. Nếu Nursery chưa có trong ván, tìm nó trong chồng phòng, đặt vào và xáo lại. Để sang một bên các token quái vật nhỏ màu đỏ (Kills) bằng hai lần số anh hùng.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn có ba Kills, hoặc tổng cộng số Kills bằng hai lần số anh hùng đã được trao. Trong trường hợp sau, mọi nhà thám hiểm có một Kill đều thắng; người có nhiều Kills nhất là người-thắng-bá-đạo-nhất.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Tấn công bằng Bloodstone: một đợt tấn công Speed nhằm vào bất kỳ ai trong tầm nhìn (bạn không hạ chỉ số, nên hãy dùng mỗi lần). Nếu bạn bị đánh bại, không nhận sát thương từ đợt tấn công thất bại, nhưng Bully gây cho bạn 1 sát thương tinh thần vì là một "Kẻ Thua Cuộc!". Nếu bạn giết được mục tiêu, giữ Bloodstone và vẫn là kẻ phản bội thêm một lượt nữa. Nếu không, đưa Bloodstone và Traitor\'s Tome cho mục tiêu của bạn (họ trở thành kẻ phản bội, không được tấn công bạn ở lượt sau). Nếu bạn không tấn công, nhận 2 sát thương tinh thần, đổ một xúc xắc, và chuyền Bloodstone qua bấy nhiêu anh hùng về phía bên trái bạn. Nếu bị một anh hùng giết hoặc bạn để mất Bloodstone vào tay một anh hùng, anh hùng đó trở thành kẻ phản bội. Khi bất kỳ nhà thám hiểm nào giết một người khác, nhà thám hiểm đó nhận một Kill.',
      },
      {
        heading: 'Luật Vật Phẩm Và Điềm Báo Đặc Biệt',
        body: 'Bạn không được nhặt hay dùng vũ khí khi bạn là kẻ phản bội. Bạn không nhận sát thương từ việc dùng Bloodstone, và bạn không được làm rơi nó.',
      },
    ],
    monsters: [],
  },

  68: {
    id: 68,
    title: 'He Who Must Not Be Read',
    intro:
      'Khi bạn mở cuốn sách — một truyện thiếu nhi về một pháp sư gọi hồn độc ác tên Maldovo — những hình minh họa của nó phát sáng. "Cuối cùng, lễ triệu hồi ta đã hoàn tất. Ta là Maldovo, và ta đã trở về thế giới này!"',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn vẫn còn trong ván nhưng đã trở thành kẻ phản bội. Tăng tất cả các chỉ số chưa cao hơn ít nhất 2 so với giá trị khởi đầu lên đến giá trị đó. Để sang một bên các token item 1–5 (Soulcruxes). Đặt item 1 (Chest) vào một phòng tùy chọn; giữ các token còn lại gần đó.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đã chết.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Bạn không thể nhận sát thương; bạn vẫn có thể tấn công anh hùng và họ có thể trộm từ bạn. Nếu một anh hùng chết, họ làm rơi tất cả lá bài, trở thành một Wraith, và gia nhập phe bạn (một Wraith không thể rút, mang, hay dùng lá bài; một Wraith bị choáng sẽ bị gỡ ra). Nếu một anh hùng có bạn đồng hành (Cat, Dog, Girl, hoặc Madman) khi bị biến đổi, lật những lá đó úp xuống; mỗi lá thêm 1 xúc xắc cho mỗi bạn đồng hành vào các lần đổ của Wraith. Sau khi đọc xong tất cả hướng dẫn, nếu bất kỳ anh hùng nào nhắc đến tên của bạn — Maldovo — bạn có thể tấn công Sanity nhằm vào họ.',
      },
      {
        heading: 'Luật Di Chuyển Đặc Biệt',
        body: 'Bạn có thể đi qua nhưng không kết thúc lượt trong một phòng Soulcrux (Wraiths thì có thể). Bạn, các Wraiths, và các item đặc biệt có thể khám phá phòng, vận hành Mystic Elevator, và không cần đổ đặc biệt để vào hay ra khỏi phòng.',
      },
      {
        heading: 'Luật Vật Phẩm Đặc Biệt',
        body: 'Khi một anh hùng vào phòng Chest, công bố nội dung: Chest bị khóa (đổ Might 4+ để phá, hoặc tự động mở bằng lá Key). Mở ra → một Rabbit chạy ra (thay #1 bằng #2; nó hành động sau người mở, chạy trốn với Speed 4; đổ Speed 3+ để giết). Rabbit bị giết → một Duck (thay #2 bằng #3, Speed 5; đổ Might 4+ để giết). Duck bị giết → một Egg (thay #3 bằng #4, Speed 1; đổ Knowledge 5+ để đập vỡ). Egg bị đập vỡ → linh hồn của bạn dưới dạng một Pen (thay #4 bằng #5; đổ Sanity 6+ để phá hủy).',
      },
    ],
    monsters: [],
  },

  69: {
    id: 69,
    title: 'No Noose Is Good News',
    intro:
      'Bạn tỉnh dậy với một thòng lọng trong tay, tràn ngập ký ức của một ai khác và một thôi thúc thi hành các lệnh hành quyết. Những cái tên trong danh sách của bạn hiện ra như một ván Hangman cũ. Thì ra đó là cách bạn quyết định ai sẽ lên giá treo cổ...',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn vẫn còn trong ván nhưng đã trở thành kẻ phản bội. Lấy số mảnh giấy bằng số anh hùng và vẽ một giá treo cổ Hangman trên mỗi tờ. Quyết định một chủ đề (tựa đề, tên người, hoặc từ/cụm từ thông dụng), thông báo cho tất cả người chơi. Bí mật viết một từ hoặc cụm từ cho mỗi anh hùng (tối đa bốn từ, mười hai chữ cái). Dưới mỗi giá treo cổ, viết các ô trống. Nói giọng Viễn Tây trong phần còn lại của ván.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ đều nằm trong danh sách hành quyết của bạn và sẽ chơi Hangman để giành lại mạng sống.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đã chết.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Thay vì tấn công, hãy thử treo cổ một anh hùng: một đợt tấn công Might nhằm vào một anh hùng trong phòng của bạn (không gây sát thương); nếu thắng, đặt một thòng lọng quanh cổ họ (cho đến khi họ thoát ra được, họ không thể đoán chữ và đổ bớt 2 xúc xắc khi chống lại các đợt tấn công). Nếu bạn ở Roof Landing, Upper Landing, hoặc Foyer, thay vào đó tấn công Speed nhằm vào một anh hùng ở tầng dưới — vạch một đường dùng cả hai landing, đổ bớt 1 xúc xắc cho mỗi phòng giữa hai người (không tính các phòng của bạn), với một chuỗi cửa không khóa liên tục.',
      },
      {
        heading: 'Cách Chơi Trò Giá Treo Cổ',
        body: 'Mỗi lượt một lần, một anh hùng có thể đoán một chữ cái. Đúng → viết nó vào. Sai → vẽ một bộ phận cơ thể (đầu, thân, tay trái, tay phải, chân trái, chân phải), và anh hùng đó nhận 1 xúc xắc sát thương vật chất. Nếu lá Hangman của một anh hùng hoàn thành với một người đầy đủ (sáu lần đoán sai) khi bạn đang trong tầm nhìn, anh hùng đó bị giết.',
      },
    ],
    monsters: [],
  },

  70: {
    id: 70,
    title: 'To Reach the Cosmos',
    intro:
      'Một tiếng o o trong tai bạn cứ ngày một lớn dần. Mỗi suy nghĩ vang vọng như tiếng trống. Bạn suýt không để ý đến cái xúc tu màu xanh dương nhợt nhạt đang tiến vào phòng, dựng đứng lên như một cái ống hút uốn cong chỉa vào đầu bạn.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn vẫn còn trong ván nhưng đã trở thành kẻ phản bội. Để sang một bên các token quái vật nhỏ màu lục (Brainstraws). Đặt một Brainstraw vào phòng của bạn và một cái vào một phòng kề bên cách tối đa ba phòng mà không có anh hùng trong đó (nếu không có phòng trống, đặt chúng vào phòng của bạn). Lấy số giấy bằng số anh hùng; viết một "Thought" cho mỗi anh hùng và gấp lại. Bên ngoài mỗi tờ, viết một chỉ số (không chỉ số nào quá hai lần) và tăng chỉ số đó của Thought lên 1.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ không muốn bạn thăng thiên; họ sẽ cắt ống hút của bạn và cố lấy các Thought của bạn.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn kết thúc lượt khi đang giữ Thought của mỗi anh hùng còn sống.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Thay vì tấn công vật chất, hãy tấn công Sanity nhằm vào một anh hùng trong phòng của bạn. Một Brainstraw có thể trộm một Thought ngẫu nhiên bằng một đợt tấn công Knowledge, rồi kết thúc di chuyển và sinh ra một Brainstraw khác trong phòng của nó. Nếu một Brainstraw bị đánh bại trong lượt của anh hùng, nó bị choáng và rút về phòng của bạn. Khi một anh hùng đánh bại bạn để trộm Thought của bạn, nếu bạn đang giữ Thought của một nhà thám hiểm khác thì bạn có thể đưa cái đó thay thế.',
      },
      {
        heading: 'Mất Và Nhận Suy Nghĩ',
        body: 'Nếu bạn mất một Thought, mất 1 ở chỉ số ghi trên tờ giấy. Nếu bạn nhận một Thought, nhận 1 ở chỉ số của nó và đọc to lên.',
      },
    ],
    monsters: [
      {
        name: 'Brainstraws',
        stats: 'Speed 3 · Might 5 · Sanity 5 · Knowledge 5 (một Brainstraw trong Mystic Elevator làm vô hiệu nó cho đến khi nó rời đi)',
      },
    ],
  },

  71: {
    id: 71,
    title: 'The Other Side',
    intro:
      'Cuối cùng bạn đã liên lạc được với các linh hồn trong nhà, và chúng không hề thân thiện. Bạn đang đứng trong một căn nhà bị khóa kín đầy những hồn ma hiện hình. Cách duy nhất để thoát ra còn sống là xoa dịu các Ghost của người chết đang kiểm soát căn nhà.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn vẫn còn trong ván nhưng đã trở thành kẻ phản bội. Để sang một bên các token nhà thám hiểm tương ứng: mỗi anh hùng một token khi có 4–5 anh hùng, hai token mỗi loại khi có 3, ba token mỗi loại khi có 2. Tăng Sanity và Knowledge của bạn lên giá trị tối đa. Trang bị săn ma: với mỗi anh hùng, tìm trong chồng item và chồng bài bỏ theo thứ tự này — Chalk, Device, Ceremonial Robes, Locket, Blueprint — và lấy bất kỳ lá nào một anh hùng đang giữ, rồi xáo chồng bài bỏ trở vào chồng item.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn đưa được tất cả các Ghost về cõi yên nghỉ.',
      },
      {
        heading: 'Cách Đưa Một Ghost Về Yên Nghỉ',
        body: 'Lấy một thứ quý giá từ mỗi Ghost và đưa nó tới một phòng có biểu tượng omen; làm việc này ít nhất bốn lần và ít nhất một lần cho mỗi Ghost. Khi bạn trộm một item thuộc về một Ghost, đặt token nhà thám hiểm của anh hùng đó lên item; đưa nó tới một phòng và đặt token nhà thám hiểm ở đó để đánh dấu nó đã yên nghỉ, sau đó Ghost đó hạ các chỉ số của nó về giá trị thấp nhất. Bạn không được tái sử dụng một phòng đã có token nhà thám hiểm.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Chỉ tấn công Ghosts bằng Sanity hoặc Knowledge, mỗi lượt một lần cho mỗi Ghost trong phòng của bạn; bất kể chỉ số gì, một Ghost chỉ có thể mất Sanity. Khi bạn đánh bại một Ghost, nhận 1 Sanity hoặc Knowledge và lấy một item của nó (kể cả item thường không thể bị mất). Nếu một Ghost tấn công bạn bằng Speed, Might, hoặc Knowledge và thắng, bạn không nhận sát thương trừ khi Sanity của bạn đang ở giá trị tối thiểu.',
      },
    ],
    monsters: [],
  },

  72: {
    id: 72,
    title: "Man's Worst Enemy",
    intro:
      'Bạn bế lên một chú cún tội nghiệp bị mắc kẹt, không hề để ý đến hình ngũ giác ma thuật quanh nó. Giờ đôi mắt đầy tâm hồn của nó đã định hình lại tâm trí bạn. Nó là một chú cún ngoan biết bao — và bạn cần bảo vệ người bạn của mình khỏi những đồng minh cũ.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn vẫn còn trong ván nhưng đã trở thành kẻ phản bội. Bỏ lá Dog và đặt một token quái vật màu đỏ (the Beast) vào phòng của bạn. Nếu bạn có Girl, Cat, hoặc Madman, để sang một bên các lá của chúng và điều chỉnh chỉ số của bạn cho phù hợp (không thấp hơn ngưỡng đầu lâu); thể hiện các bạn đồng hành bằng các token quái vật màu khác nhau đặt vào các phòng khác nhau cách tối đa 4 ô. Đặt thanh Lượt/Sát thương về 6.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ đang cố tiêu diệt the Beast.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đều đã chết hoặc bị the Beast kiểm soát.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Của Mình',
        body: 'Vào cuối mỗi lượt, hạ thanh Lượt/Sát thương. Khi nó về 0, bạn có thể chiếm hữu một anh hùng, rồi đặt lại thanh về 6.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'The Beast tấn công Sanity (sát thương tinh thần); giảm chỉ số tinh thần của nạn nhân về ngưỡng đầu lâu sẽ chiếm hữu họ. The Beast không thể bị tấn công bằng các cách thông thường. Bạn và các nạn nhân bị chiếm hữu khác tấn công và dùng lá bài bình thường; nếu bất kỳ chỉ số nào của bạn giảm về ngưỡng đầu lâu thì bạn bị gỡ ra. Nếu một anh hùng có lá Cat, the Beast phải tấn công anh hùng đó nếu có thể. Khi thanh Lượt/Sát thương về 0, the Beast có thể tự động chiếm hữu anh hùng có Sanity thấp nhất.',
      },
    ],
    monsters: [{ name: 'The Beast', stats: 'Speed 4 · Might 4 · Sanity 6' }],
  },

  73: {
    id: 73,
    title: 'Existence Precedes Essence',
    intro:
      'Bạn nhúng một cái sọ vào hắc ín phát sáng đầy sao và nó mọc thịt, trở thành một cái Head sống. "Tôi... Là... Cái gì?" nó hỏi. "Anh bạn ơi, cậu là người bạn thân mới của tôi, và cùng nhau chúng ta sẽ không bao giờ buồn nữa." "Hoan hô! Mà này, tôi đói rồi," cái Head nói.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn vẫn còn trong ván nhưng đã trở thành kẻ phản bội. Hạ Sanity của bạn về giá trị thấp nhất trên ngưỡng đầu lâu. Đặt token Fountain và token Head hình tròn lớn vào phòng reveal. Để sang một bên một token nhà thám hiểm tương ứng cho mỗi anh hùng. Lấy ba mảnh giấy và viết: "Tấn công anh hùng gần nhất", "Gia nhập kẻ phản bội", "Quay lại với phe anh hùng".',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đều đã bị cho Head của bạn ăn hoặc biến thành những người bạn mới.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Thay vì tấn công, hãy ném cái Head: tung nó qua bao nhiêu phòng tùy ý theo một đường thẳng (kể cả lên/xuống cầu thang, Balcony, hoặc Coal Chute), rồi tấn công Might nhằm vào một anh hùng trong phòng đó. Nếu một anh hùng bị giết, thay quân của họ bằng token nhà thám hiểm tương ứng. Nếu cái Head giết một anh hùng hoặc đi qua một token nhà thám hiểm, đặt token đó lên cái Head (token di chuyển cùng nó và có thể bị trộm). Khi cái Head đang có token nhà thám hiểm nào, nó không thể tấn công nhưng có thể phòng thủ.',
      },
      {
        heading: 'Thêm Nhiều Bạn Mới',
        body: 'Nếu một token nhà thám hiểm của anh hùng được đưa vào Fountain, anh hùng đó hồi sinh thành một quái vật (đặt lại chỉ số, đưa cho mảnh "Tấn công", đặt vào phòng của anh hùng gần nhất). Nếu anh hùng bị tấn công đánh trả nó vào lượt sau, đưa cho mảnh "Gia nhập" (giờ về phe bạn); nếu không, mảnh "Quay lại" (trở về với phe anh hùng). Thu lại mảnh giấy mỗi lần.',
      },
    ],
    monsters: [{ name: 'The Head', stats: 'Speed 5 · Might 5' }],
  },

  74: {
    id: 74,
    title: 'Coulrophobia',
    intro:
      'Bạn nhìn vào gương và nhận ra căn nhà này không đáng sợ — nó vui nhộn mới đúng! Điều buồn cười nhất sẽ là giết tất cả mọi người theo những cách thật vui nhộn. Hãy đeo cái mũi đỏ to này lên trước đã.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn vẫn còn trong ván nhưng đã trở thành kẻ phản bội — bạn là chú hề Knick-Knack the Clown và bạn kể những câu đùa knock-knock. Đặt quân của bạn vào Entrance Hall. Bạn có thể đặt lại bất kỳ chỉ số nào lên mức 1 trên giá trị khởi đầu. Để sang một bên năm token item hình ngũ giác (Gags). Lấy năm tờ giấy đánh số 1–5 với các từ (1. Bình xịt soda phun axit, 2. Đệm hơi phát nổ, 3. Vỏ chuối làm gãy cổ, 4. Bánh kem độc, 5. Gà cao su siết cổ). Nhắm mắt lại, để mỗi anh hùng bí mật chọn một tờ giấy (giấu những tờ không được chọn).',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn giết hai anh hùng, hoặc tất cả trừ một anh hùng đã ra khỏi nhà và bạn giết anh hùng đó.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Mỗi lượt một lần, kể một câu đùa knock-knock hoặc một câu đùa chết người. Knock-Knock: chọn một Gag và kể một câu đùa; mỗi anh hùng trên tầng của bạn đổ Sanity. Nếu Gag của bạn khớp với tờ giấy của anh hùng đó, bạn cười điên loạn và họ cần 5+; những người khác cần 2+. Người thất bại nhận 1 sát thương tinh thần. Killing Joke: nếu bạn hoặc the Dog ở trong phòng của một anh hùng, dùng một Gag (bị phá hủy); anh hùng cần đổ Might hoặc Speed 5+ nếu không sẽ nhận 1 sát thương vật chất và 1 sát thương tinh thần. Nếu Gag khớp với tờ giấy của họ, đặt nó ngửa lên trước mặt họ; vào lượt sau của họ, họ bắt đầu cười đến chết (1 sát thương vật chất và 1 sát thương tinh thần vào cuối mỗi lượt, không tấn công). Khi bạn sắp nhận sát thương, hãy phá hủy một Gag để không nhận gì. Noodles the Dog có thể tấn công và mang một Gag.',
      },
    ],
    monsters: [{ name: 'Noodles the Dog', stats: 'Speed 6 · Might 3' }],
  },

  75: {
    id: 75,
    title: 'Let It Glow',
    intro:
      'Một quả cầu tuyết tràn vào tâm trí bạn những ký ức đen tối về tuyết giá băng, và một sức mạnh băng giá chảy qua người bạn. Giờ tất cả mọi người sẽ cảm thấy lạnh lẽo như trái tim bạn suốt bao năm qua...',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn vẫn còn trong ván nhưng đã trở thành kẻ phản bội. Đặt thanh Lượt/Sát thương về 1 (nhiệt độ; mỗi con số là 10°F dưới không độ). Để sang một bên mười token quái vật màu cam (Snow Monsters). Nhận 2 Might và 2 Knowledge.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Của Mình',
        body: 'Vào cuối mỗi lượt, tăng thanh Lượt/Sát thương (nhiệt độ giảm) và thông báo nó. Nếu thanh về 0, bạn nhận 1 xúc xắc sát thương vật chất vào đầu lượt của bạn trừ khi bạn ở trong Balcony.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng bị giết hoặc chết cóng. Khi thanh đạt 9 trừ đi số anh hùng lúc bắt đầu haunt, căn nhà hoàn toàn đóng băng và tất cả anh hùng đông cứng.',
      },
      {
        heading: 'Cách Tạo Snow Monsters',
        body: 'Mỗi lượt một lần, tạo một Snow Monster trong bất kỳ phòng nào có biểu tượng omen bằng cách thành công đổ Knowledge 5+ (tối đa mười con trong ván). Speed và Might của một Snow Monster bằng số trên thanh (tối thiểu 1). Nếu bạn bị tấn công trong một phòng có Snow Monster, bạn có thể bắt anh hùng tấn công Snow Monster thay thế.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Quái Vật',
        body: 'Với mỗi Snow Monster ngửa lên trong một phòng có Thermostat không khóa, bạn có thể đổ một xúc xắc; với mỗi kết quả trống, tăng thanh Lượt/Sát thương.',
      },
    ],
    monsters: [],
  },

  76: {
    id: 76,
    title: 'Back to the Past',
    intro:
      'Bạn lau máu khỏi con dao găm của mình và có một cảm giác deja vu kỳ lạ. Ai đó đã thay đổi quá khứ — hoặc tương lai. Không sao cả; tất cả những gì bạn cần làm là ẩn mình, và sức mạnh sẽ là của bạn.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn vẫn còn trong ván nhưng đã trở thành kẻ phản bội. Để sang một bên chín token Obstacle (Pentagrams) và sáu token quái vật nhỏ (Flipped Landings). Gỡ quân của bạn khỏi căn nhà. Chọn một phòng đang có trong ván để ẩn náu; viết tên nó lên giấy và giữ bí mật.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ đang đảo ngược thời gian để ngăn bạn giết họ. Hãy làm họ chậm lại bằng cách che giấu vị trí của bạn.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn hoàn thành nghi lễ bằng cách chưa bị lộ khi thanh Lượt/Sát thương về 0.',
      },
      {
        heading: 'Luật Thứ Tự Lượt Đặc Biệt',
        body: 'Bạn không đi theo lượt; bạn hành động trong lượt của các anh hùng.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Mỗi Lượt Của Anh Hùng',
        body: 'Một anh hùng hỏi một câu hỏi có/không về phòng của bạn (bạn phải trả lời trung thực; câu hỏi chỉ giới hạn ở tên hoặc đặc điểm của phòng — không phải tầng, vị trí, biểu tượng, hay chữ của nó). Sau khi trả lời, đổ 2 xúc xắc và lật úp tối đa bấy nhiêu phòng mà người chơi giờ biết chắc không phải của bạn (đừng bao giờ lật phòng của bạn). Khi bạn lật một phòng, gỡ các quân/token ra, lật nó, đặt lại, rồi đặt các quân/token trở lại. Một landing bị lật sẽ được đánh dấu bằng một token quái vật nhỏ và vẫn được coi là landing đó.',
      },
      {
        heading: 'Cách Làm Anh Hùng Chậm Lại',
        body: 'Vào đầu mỗi lượt của anh hùng, bạn có thể đặt một trong chín Pentagrams vào bất kỳ phòng nào (tốn thêm một ô di chuyển để vào). Mỗi lần một anh hùng vào một phòng bị lật, họ nhận 1 xúc xắc sát thương tinh thần.',
      },
    ],
    monsters: [],
  },
};
