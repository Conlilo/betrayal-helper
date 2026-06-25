import type { HauntStory } from '../../types';

export const SS_VI_4: Record<number, HauntStory> = {
  76: {
    id: 76,
    title: 'Trở Về Quá Khứ',
    intro:
      'Một người quản gia làm rơi khay kim loại và mọi thứ tối sầm lại. Bạn tỉnh dậy ở lối vào, nhưng ngôi nhà giờ được thắp sáng bằng nến và đầy ắp người. "Các người là hiện thân tái sinh của những thành viên trong công ty đã xây ngôi nhà này. Bản thể trước đây của các người vừa mới bị sát hại. Hãy chặn kẻ giết người trước khi nghi lễ hoàn tất, và các người sẽ ngăn ngôi nhà này thức tỉnh mãi mãi."',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Bắt đầu từ người mở haunt, lần lượt rút các phòng từ chồng bài và đặt chúng cho đến khi tất cả được đặt hết hoặc bạn không thể đặt thêm. Đặt quân của bạn vào Entrance Hall. Đặt thanh Lượt/Sát thương về 12 — thời gian sắp chảy ngược.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn vạch trần kẻ phản bội trước khi thanh Lượt/Sát thương về 0.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Của Mình',
        body: 'Hạ thanh Lượt/Sát thương. Nếu kẻ phản bội chưa bị tìm ra, họ có thể đặt một Obstacle token (Pentagram) vào bất kỳ phòng nào.',
      },
      {
        heading: 'Cách Truy Tìm Kẻ Phản Bội',
        body: 'Đầu lượt của bạn, hỏi kẻ phản bội một câu hỏi có/không về nơi họ đang ở (phải trả lời thật; chỉ giới hạn ở tên hoặc đặc điểm của phòng — không phải tầng, vị trí, biểu tượng hay chữ viết). Cuối lượt, bạn có thể tuyên bố phòng của mình là phòng của kẻ phản bội; nếu đúng, bạn thắng; nếu sai, nhận 1 sát thương tinh thần và hạ thanh.',
      },
      {
        heading: 'Luật Di Chuyển Đặc Biệt',
        body: 'Bạn có thể đi qua các cửa giả từ phía lối vào. Khi vào một phòng úp mặt, nhận 1 sát thương tinh thần; bạn có thể vào/ra bất kỳ cạnh nào của phòng úp mặt. Bỏ qua mọi chữ cản trở di chuyển trừ Pentagram của kẻ phản bội (cần thêm một ô để vào).',
      },
    ],
    monsters: [],
  },

  77: {
    id: 77,
    title: 'Chúng Luôn Đuổi Theo Tôi',
    intro:
      'Bạn của bạn mở một cái hộp và biến thành một Leprechaun. "Các ngươi sẽ không lấy được nồi vàng của ta đâu!" Ở đâu có Leprechaun, ở đó có Pot of Gold (Nồi Vàng) cuối Cầu Vồng. Giờ bạn cần tìm Cầu Vồng.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Đặt các item token ngũ giác 1–7 (Wishes — Điều Ước) gần Entrance Hall. Để riêng bảy monster token (Colors of the Rainbow — Các Màu Cầu Vồng), mỗi màu một cái. Để riêng một Item Pile token ngũ giác (Pot of Gold).',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn tìm thấy Pot of Gold.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Leprechaun bị bắt bằng ngón chân. Nếu bạn đánh bại Leprechaun, thay vì gây sát thương bạn có thể chọn một Wish từ bảng Wishes và bỏ item token tương ứng của nó trở lại hộp. Bạn không thể chọn một Wish mà token của nó không có trên bàn.',
      },
      {
        heading: 'Luật Vật Phẩm Và Điềm Báo Đặc Biệt',
        body: 'Nếu bạn sắp rút một lá Item, bạn có thể rút một lá Omen thay thế. Nếu bạn rút lá Medallion, xếp bảy Colors of the Rainbow ra từ một cửa mái nhà đang mở (đỏ, cam, vàng, lục, lam, tím, hồng cánh sen), rồi đặt Pot of Gold ở cuối.',
      },
      {
        heading: 'Luật Di Chuyển Đặc Biệt',
        body: 'Mỗi Color of the Rainbow là một ô phòng Roof riêng. Chỉ một anh hùng được kết thúc lượt trên mỗi Color, nhưng bạn có thể đi xuyên qua một Color đã có người. Vào Color cuối cùng màu hồng cánh sen và bạn có thể lấy Pot of Gold và thắng. Nếu không, đường rơi xuống rất dài đấy.',
      },
      {
        heading: 'Wishes (Điều Ước)',
        body: '1 Mỗi anh hùng rút một lá Item. 2 Đặt quân của bạn vào bất kỳ phòng nào. 3 Tăng 1 Speed và 1 Might. 4 Tăng 1 Sanity và 1 Knowledge. 5 Rút ba lá Event, giữ một lá, xáo những lá còn lại trở lại. 6 Thay một phòng bất kỳ (không phải phòng đang đáp xuống) bằng ô phòng trên cùng. 7 Cướp bất kỳ lá Item hay Omen nào từ Leprechaun, kể cả khi nó không thể bị cướp.',
      },
    ],
    monsters: [],
  },

  78: {
    id: 78,
    title: 'Tên Của Quỷ',
    intro:
      'Khi bạn nhấc một phiến đá khắc chữ tượng hình, một cái tên rực cháy cố ép vào tâm trí bạn, rồi tẩu thoát xuống hành lang. Kẻ phản bội bị một Fiend (Ác Quỷ) cổ đại nhập, kẻ chỉ bị giam cầm bởi sức mạnh của chính tên thật của nó.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nếu lá Chalk không có trong cuộc chơi, lục chồng Item và chồng bài bỏ để tìm nó, đưa cho một anh hùng, rồi xáo chồng bài bỏ vào chồng bài.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Fiend muốn nhập vào mọi phàm nhân, thay danh tính của họ bằng tên của chính nó. Nó có thể hủy các Tomes of Lore (Cuốn Sách Tri Thức) trong Furnace Room hoặc Kitchen — hãy đến đó trước.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn trục xuất Fiend bằng cách nói ra tên thật của nó.',
      },
      {
        heading: 'Cách Học Tên Thật Của Fiend',
        body: 'Lấy một Tome of Lore khi bạn vào phòng của nó. Trong lượt của mình, từ bỏ di chuyển để thử đổ Knowledge 5+ nghiên cứu cái tên ở Brimstone Square. Nếu thành công, bỏ Tome và kẻ phản bội phải tiết lộ một chữ cái. Bạn chỉ mang được một Tome mỗi lần.',
      },
      {
        heading: 'Cách Trục Xuất Fiend',
        body: 'Ở cùng phòng với Fiend (hoặc một anh hùng đã bị nhập) và nói ra cái tên (mỗi lượt một lần, kể cả trước khi mọi chữ cái được tiết lộ). Nói sai với một anh hùng bị nhập: Fiend gây cho bạn sát thương tinh thần bằng số chữ cái chưa tiết lộ. Nói sai với Fiend: bạn bị nhập. Nói đúng với anh hùng bị nhập: chấm dứt sự nhập và giải thoát họ (sau đó họ miễn nhiễm). Nói đúng với Fiend: bạn trục xuất được nó.',
      },
      {
        heading: 'Brimstone Square',
        body: 'Một lưới 5x5; mỗi cột là một chữ cái trong cái tên năm chữ của Fiend, đọc từ trái sang phải. Các hàng: B R M T S / O E L A H / L I T U R / M O C I M / V A P H K.',
      },
    ],
    monsters: [],
  },

  79: {
    id: 79,
    title: 'Cặp Song Sinh',
    intro:
      'Một sợi dây đỏ bùng lên giữa hai người bạn của bạn, những kẻ đã hợp nhất thành một thực thể lai. Cùng nhau, chúng đang cố tạo ra một Seam (Đường Nối) năng lượng có thể khiến ngôi nhà này sụp đổ.',
    sections: [
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Chúng là hai nửa của một liên kết năng lượng mạnh mẽ, đang đan dệt một Seam.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Một trong hai Twin chết.',
      },
      {
        heading: 'Nodes (Nút)',
        body: 'Twins để lại các Node năng lượng quanh nhà. Bạn có thể thử đổ Knowledge 5+ để hoặc hủy một Node (trả nó về cho Twins) hoặc di chuyển một trong hai Twin tới gần bạn tối đa 5 ô.',
      },
      {
        heading: 'Luật Di Chuyển Đặc Biệt',
        body: 'Bạn không thể di chuyển hay tạo tầm nhìn xuyên qua một Node; lối đi bị chặn từ bên này sang bên kia. Các Node không bao giờ được tách một phòng hay một nhóm phòng khỏi phần còn lại của ngôi nhà.',
      },
    ],
    monsters: [],
  },

  80: {
    id: 80,
    title: 'Tôi, Kẻ Đột Biến',
    intro:
      'Bạn tỉnh dậy trên sàn, da chuyển sang một sắc xanh tím kỳ lạ. Bạn đã bị phản bội bởi một nhà khoa học không-hẳn-tỉnh-táo, kẻ muốn biến bạn thành đối tượng cho một nghiên cứu quái dị.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Đặt thanh Lượt/Sát thương về gấp đôi số nhà thám hiểm (nó theo dõi sát thương đối với Research Laboratory).',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn hạ thanh Lượt/Sát thương về 0, phá hủy Research Laboratory và chặn đứng các thí nghiệm của kẻ phản bội.',
      },
      {
        heading: 'Bị Bắt Giữ',
        body: 'Các Electronet của kẻ phản bội bắt giữ bạn. Nếu bị bắt, lật ngã quân của bạn; bạn không thể di chuyển hay hành động ngoài việc đột biến và thả một vật phẩm. Đầu lượt của bạn, gỡ một Electronet khỏi phòng của bạn; khi không còn cái nào ở đó, bạn không còn bị bắt giữ nữa.',
      },
      {
        heading: 'Đột Biến',
        body: 'Cuối lượt của mình, bạn có thể đột biến: hạ một hay nhiều chỉ số đi 1 trở lên, rồi tăng một chỉ số khác lên đúng tổng đó. Với chỉ số cao nhất của bạn, nhận một năng lực cho phần còn lại của ván (chỉ một năng lực mỗi lần). Speed: tốn 1 di chuyển để đi xuyên tường, hoặc 2 để bỏ qua một Electronet bạn bước vào. Might: mỗi lượt một lần, nhấc và xoay phòng của bạn (khớp ít nhất một cửa; đừng tách rời các phòng). Sanity: bỏ qua chữ trong phòng và điều khiển Mystic Elevator; mỗi lượt một lần, một lần đổ Sanity gỡ một Electronet cho mỗi xúc xắc hiện ra mặt 2. Knowledge: mỗi lượt một lần, rút một lá Item.',
      },
      {
        heading: 'Cách Phá Hủy Research Laboratory',
        body: 'Bắt đầu lượt của bạn ở Research Laboratory và, thay vì di chuyển hay tấn công, đập phá thiết bị phòng thí nghiệm: đổ Might, và cho mỗi xúc xắc hiện ra mặt 2, hạ thanh Lượt/Sát thương.',
      },
    ],
    monsters: [],
  },

  81: {
    id: 81,
    title: 'Lời Nguyền Của Bình Canopic',
    intro:
      'Người đồng hành của bạn mở một cái hộp, tìm thấy một bình canopic, và lẩm bẩm, "Giờ thì tìm đúng cái nào nữa thôi." Một cảm giác lạ lùng dâng lên trong bạn — và bạn chắc chắn rằng sẽ rất tệ nếu bạn của bạn tìm được đúng cái Jar (Bình).',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Lấy các item token ngũ giác (Jars) 1–6. Đặt các item 1–5 ngửa mặt một cách ngẫu nhiên (không quá hai cái mỗi tầng; ưu tiên các phòng Item trống trước, rồi đến phòng Omen). Đưa item 6 cho kẻ phản bội.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn mang đúng cái Jar về Entrance Hall.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Của Mình',
        body: 'Mỗi anh hùng đều bị nguyền. Kẻ phản bội gọi từng người một ra để gán một Curse (Lời Nguyền, theo Traitor\'s Tome). Bạn phải tuân theo nó mọi lúc và không được tiết lộ bản chất của nó hay bàn luận về hành động của mình.',
      },
      {
        heading: 'Cách Lấy Một Jar',
        body: 'Lấy một Jar khỏi một phòng vào cuối lượt của bạn (sau đó bạn không thể di chuyển, nhưng có thể đưa nó cho người khác). Chỉ một Jar mỗi lượt; bạn có thể thả một cái bất cứ lúc nào nhưng không thể nhặt lại nó trong cùng lượt đó.',
      },
      {
        heading: 'Cách Biết Ai Có Đúng Jar',
        body: 'Khi cả sáu Jar được thu thập, kẻ phản bội tiết lộ Curse nằm dưới Mummy; nhà thám hiểm có Jar khớp với nó là người giữ đúng cái Jar, và đến lượt người đó (một anh hùng phải hướng về Entrance Hall). Không ai được tấn công người giữ Jar cho đến khi đúng Jar được tiết lộ; sau đó, người giữ bị thương phải đổ Might 4+ để giữ được nó.',
      },
    ],
    monsters: [],
  },

  82: {
    id: 82,
    title: 'Tìm Manh Mối',
    intro:
      'Một tiếng hét — chủ nhà mời bạn dùng bữa được phát hiện đã chết, bị Butler bóp cổ. Cảnh sát đang trên đường tới, và khi họ đến, mọi người cần một bằng chứng ngoại phạm, nếu không sẽ có một sợi Rope gọi tên bạn.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nếu Dining Room không có trong cuộc chơi, lục chồng phòng để tìm nó, đặt nó, và xáo lại. Đặt quân của tất cả anh hùng vào Dining Room. Để riêng một explorer token cho mỗi anh hùng. Đặt số item token ngũ giác bằng số anh hùng vào Dining Room — các vũ khí giết người tiềm năng: 1 Stiletto, 2 Derringer, 3 Candelabrum, 4 Crowbar, 5 Truncheon (Rope cũng là một vũ khí nhưng khởi đầu nằm với kẻ phản bội).',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Mỗi anh hùng thiết lập được một bằng chứng ngoại phạm trước khi cảnh sát đến. Một bằng chứng phải bao gồm Rope. Nếu một anh hùng chết trước, người khác có thể thiết lập bằng chứng cho họ bằng các phòng ngoại phạm của anh hùng đã chết.',
      },
      {
        heading: 'Cách Thiết Lập Bằng Chứng Ngoại Phạm',
        body: 'Mang một vũ khí giết người (Rope hoặc một cái từ Dining Room) tới một trong các phòng ngoại phạm đặc thù của bạn, rồi thử đổ Knowledge 5+ để "nhớ ra" một câu chuyện thuyết phục (bạn, vũ khí, căn phòng). Mỗi bằng chứng phải ở một phòng khác nhau. Đặt explorer token và vũ khí của bạn ở đó; nó không thể bị nhặt hay sử dụng cho đến khi cảnh sát đến.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Butler có thể bị gây sát thương như bình thường nhưng không thể bị giết; bạn có thể cướp vật phẩm qua tấn công vật chất. Khi đang ở trong một phòng ngoại phạm của bạn, kẻ phản bội không thể gây sát thương cho bạn trong một đợt tấn công.',
      },
      {
        heading: 'Khách Dự Tiệc',
        body: 'Đỏ Mr. Rose: Ballroom, Entrance Hall, Game Room. Vàng Lieutenant Lemon: Drawing Room, Entrance Hall, Study. Trắng Professor Pale: Conservatory, Entrance Hall, Kitchen. Lục Mr. Lime: Ballroom, Conservatory, Entrance Hall. Lam Mrs. Sapphire: Drawing Room, Entrance Hall, Game Room. Tím Miss Violet: Library, Entrance Hall, Study.',
      },
    ],
    monsters: [],
  },

  83: {
    id: 83,
    title: 'Trong Từng Chi Tiết',
    intro:
      'Lá thư này là một bản hợp đồng. Những người trong ngôi nhà đã ký một thỏa thuận với kẻ không nên ký, và giờ quỷ dữ đến đòi phần của mình. Tên bạn có nằm trong hợp đồng không? Bạn đã làm gì vậy?',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Trộn các Obstacle token (Names — Tên) đánh số từ 1 đến số người chơi cộng hai. Bí mật đưa cho mỗi người chơi một Name token; để riêng hai cái còn lại. Người mở haunt đi lượt đầu tiên.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Ai không có số thấp nhất sẽ phải nộp linh hồn cho các thế lực địa ngục. Giết những người khác để bạn có số thấp nhất một cách mặc định — hoặc chờ đến khi hợp đồng chuyển hướng có lợi cho bạn.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn là người cuối cùng còn lại trong nhà, hoặc bạn tìm ra một kẽ hở trong hợp đồng.',
      },
      {
        heading: 'Cách Tìm Kẽ Hở Trong Hợp Đồng',
        body: 'Phải có ít nhất một nhà thám hiểm chết trước đã. Sau đó thử đổ Knowledge 4+ trong Pentagram Chamber để lật Name token của bạn lên. Nếu không ai có số thấp hơn, bạn đã tìm ra kẽ hở. Nếu có người thấp hơn, họ bí mật cho bạn xem và bạn bốc hơi thành một làn khói (ra khỏi ván chơi).',
      },
      {
        heading: 'Cách Hiểu Rõ Hơn Vị Thế Của Bạn',
        body: 'Thử đổ Knowledge 5+ trong Library hoặc Study để xem tất cả các Name token đã để riêng và đổi một cái với của bạn.',
      },
      {
        heading: 'Cách Mặc Cả',
        body: 'Thử đổ Sanity 5+ trong Chapel để đổi token với bất kỳ nhà thám hiểm nào khác.',
      },
      {
        heading: 'Cách Đổ Xúc Xắc Với Quỷ',
        body: 'Với lá Letter ở Game Room, xáo nó vào bộ Omen để ngẫu nhiên hóa các Name: đặt Name token của bạn ra và đổ 4 xúc xắc; tất cả các nhà thám hiểm còn sống khác đổ 4 xúc xắc; ai đổ ra bằng hoặc thấp hơn bạn phải đặt Name của họ ra (người đổ cao hơn có thể tự chọn làm vậy); rồi mọi người không có Name nhận một cái đã để riêng ngẫu nhiên. Rút lá Event Contract cho phép bạn làm điều tương tự với bộ Event.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Nếu bạn giết một nhà thám hiểm khác, so sánh số trên token; đặt số cao hơn ra ngoài ván chơi và giữ cái còn lại úp mặt.',
      },
      {
        heading: 'Vào Cuối Vòng',
        body: 'Ngay trước lượt của người mở haunt, mọi nhà thám hiểm còn sống chuyền Name token của mình theo chiều kim đồng hồ cho nhà thám hiểm kế tiếp.',
      },
    ],
    monsters: [],
  },

  84: {
    id: 84,
    title: 'Quên Để Mà Nhớ',
    intro:
      'Ngôi nhà này từng là nơi ở của một kẻ giết người tài giỏi đến điên dại tên Richard Smith, kẻ đã thiết kế nó để tăng cường khả năng thần giao của mình và lưu giữ ký ức. Bằng việc bước vào, bạn đã bước vào tâm trí hắn, và ngôi nhà muốn in dấu tâm trí hắn lên tâm trí bạn.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Để riêng sáu Knowledge Roll token.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn tiêu diệt Psychic Spirit of Richard Smith bằng cách giết mọi thân xác nó trú ngụ, hoặc kẻ phản bội xóa đi dấu vết cuối cùng của Richard Smith khỏi ký ức của họ.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Ai có Crystal Ball có thể thực hiện tấn công Knowledge từ xa (việc này cũng kích hoạt Ball, nguy cơ mất Sanity). Dùng bất kỳ cách gây sát thương vật chất nào để đuổi linh hồn khỏi một phòng: tấn công Might vào phòng của bạn (coi nó như Might 5, hoặc Speed 5 với các lá như Dynamite); không gây sát thương, nhưng nếu bạn gây 2+ sát thương vật chất, đặt một Knowledge Roll token ở đó (tối đa hai cái mỗi phòng). Mỗi token hạ Sanity và Knowledge của Spirit đi 1 xúc xắc trong phòng đó.',
      },
      {
        heading: 'Điều Gì Xảy Ra Khi Bạn Sắp Chết',
        body: 'Nếu Knowledge của bạn tụt xuống biểu tượng đầu lâu (ngưỡng tử), bạn trở nên đờ đẫn (đổ 0 trên mọi đợt tấn công). Nếu Sanity tụt xuống ngưỡng tử, bạn trở thành một quái vật thực hiện các đợt tấn công tinh thần cho Spirit (trừ 2 khỏi đợt đổ của nó). Nếu Might hoặc Speed tụt xuống ngưỡng tử, bạn chết.',
      },
    ],
    monsters: [{ name: 'Psychic Spirit of Richard Smith', stats: 'Sanity 6 · Knowledge 6' }],
  },

  85: {
    id: 85,
    title: 'Kẻ Sát Nhân Trong Cỗ Máy',
    intro:
      'Một chiếc nhẫn xỉn màu rơi xuống sàn như tiếng chuông điện thoại của bạn. Một thông báo Flitter hiện ra với một thanh tiến trình mới đề "Dead Friends" (Bạn Bè Đã Chết), đặt ở mức không — nhưng linh tính mách bảo nó sẽ không dừng ở đó.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Mỗi anh hùng lấy một item token ngũ giác (một Smartphone). Để riêng các monster token nhỏ (Bars — vạch sóng) và Obstacle token (Dead Zones — vùng mất sóng).',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Ít nhất một anh hùng có chỉ số Sanity dương thoát khỏi ngôi nhà. Cửa trước bị khóa và các cửa sổ bị bịt ván, nên bạn sẽ phải gọi cầu cứu — nhưng sóng thì kinh khủng.',
      },
      {
        heading: 'Cách Dùng Smartphone',
        body: 'Mỗi lượt một lần, dò sóng hoặc gọi cầu cứu. Dò sóng trong bất kỳ phòng không phải tầng hầm nào: đổ 1 xúc xắc ở tầng trệt hoặc 2 xúc xắc ở tầng trên/mái, +1 nếu phòng có cửa sổ hoặc ở ngoài trời; đặt số Bar token bằng đó (tối đa năm), hoặc một Dead Zone nếu bằng không. Gọi cầu cứu trong phòng có ít nhất một Bar: đổ 4 xúc xắc và cộng số Bar; được 9+ thì cứu viện đang đến. Bạn có thể mất điện thoại như một vật phẩm — tự nguyện thả hoặc đưa nó đi sẽ hạ Sanity của bạn 1 xúc xắc; nếu Sanity tụt xuống ngưỡng tử, bạn trở thành "bạn" của kẻ phản bội.',
      },
      {
        heading: 'Cách Thoát Khỏi Ngôi Nhà',
        body: 'Khi cứu viện đang đến, cộng số anh hùng còn sống vào con số hiện tại trên thanh Lượt/Sát thương và đánh dấu lượt đó. Vào lượt đó hoặc bất kỳ lượt sau nào, một anh hùng ở Entrance Hall mở cửa cho cảnh sát vào, và các anh hùng thắng.',
      },
    ],
    monsters: [],
  },

  86: {
    id: 86,
    title: 'Khu Rừng Trong Căn Lều',
    intro:
      'Khung gỗ của ngôi nhà thô ráp và lá rụng khắp nơi. Đây chẳng phải nhà gì cả — nó là một cái cây hùng vĩ, bị phù phép, đang mọc lan tràn mất kiểm soát. Bạn phải đốn nó xuống trước khi nó giết cả lũ.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Mỗi anh hùng không có vũ khí rút một vũ khí ngẫu nhiên từ chồng Item (nếu có), rồi xáo lại chồng bài. Để riêng một explorer token tương ứng cho mỗi anh hùng.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn đốn ngã cái Tree (Cây).',
      },
      {
        heading: 'Cách Đốn Hạ Cái Cây',
        body: 'Phá hủy tầng trệt để phần ngọn trở nên quá nặng: điều này xảy ra khi không còn ô tầng trệt nào ngoài Tree House và tổng số phòng ở tầng trên cùng mái vượt quá số Root (Rễ) trong tầng hầm.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Mỗi lượt một lần, tấn công một phòng tầng trệt bằng tấn công Might; nếu thắng, lật úp ô đó (với Entrance Hall hoặc Grand Staircase, đặt một ô tầng trệt ngẫu nhiên úp mặt lên trên). Bạn không được tấn công Tree House. Để gỡ một Root, dùng Dynamite hoặc thả một Acorn (Quả Sồi) nặng: gỡ một Acorn trong phòng của bạn, đổ 6 xúc xắc, và nếu bạn bằng hoặc vượt số phòng tầng trệt, gỡ một Root tùy chọn (không phải Rootstalk). Trong một phòng có Acorn và Squirrel, một tấn công Knowledge đánh bại Squirrel sẽ gỡ cả hai. Lần đầu tiên bạn làm bất kỳ điều nào trong số này, đặt explorer token của bạn lên thẻ bài.',
      },
      {
        heading: 'Luật Di Chuyển Đặc Biệt',
        body: 'Bạn có thể di chuyển từ một ô úp mặt tới bất kỳ phòng kề bên nào, hoặc khám phá một phòng qua bất kỳ cạnh nào của nó. Nếu Stairs from Basement có trong cuộc chơi, giờ chúng dẫn tới và đi từ Tree House.',
      },
    ],
    monsters: [],
  },

  87: {
    id: 87,
    title: 'Anh Em Tương Tàn',
    intro:
      'Bạn đã giải phóng linh hồn của những anh chị em bị mắc kẹt trong một trò chơi khăm chết người. Hãy tìm linh hồn của Headmistress (Bà Hiệu Trưởng) — bà ấy đang cố hoàn thành một nghi lễ trừ tà cho lũ Siblings nhưng cần một người sống giúp đỡ.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Để riêng năm Sanity Roll token hình tam giác.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Linh hồn tà ác của lũ Siblings được thanh tẩy qua nghi lễ trừ tà.',
      },
      {
        heading: 'Cách Thực Hiện Nghi Lễ Trừ Tà',
        body: 'Chỉ Headmistress biết nghi lễ trừ tà, vậy nên dẫn bà ấy tới một phòng thanh tẩy — Bathroom, Chapel, Graveyard, Organ Room, hoặc Solarium — và thử đổ Sanity 6+ để tiến hành nghi lễ; nếu thành công, đặt một Sanity Roll token ở đó. Sau đó thanh tẩy mỗi Sibling bằng cách mang nó tới một phòng có Sanity Roll token (gỡ cả Sibling và token).',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Nếu bạn đánh bại một Sibling, thay vì gây sát thương bạn có thể nắm tai nó và lôi đi khi bạn di chuyển; cho đến khi nó rời phòng của bạn, bất kỳ anh hùng nào bước vào có thể tự động bắt và lôi nó đi. Nếu Headmistress ở trong phòng của bạn, cộng thêm 2 xúc xắc vào các đợt đổ tấn công và phòng thủ của bạn chống lại lũ Siblings.',
      },
      {
        heading: 'Lá Thư Của Headmistress',
        body: 'Một mẩu thư từ Doctor Abigail Mitchell, Hiệu Trưởng của Wexley School for Girls: bà đã tìm ra cách kìm hãm khuynh hướng bạo lực của lũ trẻ nhưng phải dụ chúng vào một phòng nơi linh hồn chúng có thể được thanh tẩy, và bà nhờ các bậc cha mẹ gặp bà ở đó để giăng bẫy.',
      },
    ],
    monsters: [],
  },

  88: {
    id: 88,
    title: 'Khóc Đi, Babylon!',
    intro:
      'Những cơn gió mạnh làm rung chuyển ngôi nhà khi bạn của bạn gầm lên. "Ta là Lammasu," một sinh vật chim-sư-tử gừ gừ. "Giờ chúng ta đang đứng trước tử thần vĩ đại Marduk. Mong ngài rủ lòng thương linh hồn các ngươi."',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Để riêng lá Cat. Đặt Cat token (Lammasu) vào một phòng ở tầng khác với tầng của kẻ phản bội, cách mọi anh hùng ít nhất ba phòng (một phòng đáp xuống nếu có thể; nếu không thì càng xa càng tốt).',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Kẻ phản bội đã trở thành Nebuchadnezzar, hiện thân sống của Marduk, kẻ tìm cách hấp thụ linh hồn các bạn.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn giết được vị thần biết đi mà bạn của bạn đã hóa thành.',
      },
      {
        heading: 'Cách Tranh Thủ Sự Trợ Giúp Của Lammasu',
        body: 'Khi bạn kết thúc di chuyển trong phòng của Lammasu, bỏ một lá Item hoặc Omen (không phải Cat) để đưa Lammasu vào phòng của kẻ phản bội, nơi họ mất 1 ở mỗi chỉ số; bạn cũng có thể lấy lá Cat. Lammasu sau đó bị hủy nhưng tái hiện ở một tầng khác (kẻ phản bội chọn tầng; bạn đặt nó cách mọi anh hùng ít nhất 3 phòng). Vào cuối bất kỳ lượt nào mà bạn không hiến một lá bài cho Lammasu, để riêng lá Cat nếu bạn có nó.',
      },
    ],
    monsters: [],
  },

  89: {
    id: 89,
    title: 'Một Trong Những Việc Của Ông Chủ',
    intro:
      'Xe bạn nổ lốp và bạn trú trong ngôi nhà này — sở hữu bởi một bác sĩ quái dị, kẻ đã tạo nên một quái vật từ các bộ phận cơ thể. Bạn của bạn bị lộ là Rough Ralph, gia nhân của Doctor. Nhưng bạn biết một điều họ không biết: bí mật bẻ cong thời gian.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Mỗi anh hùng lấy một item token ngũ giác (Time) và một tờ giấy trắng. Để riêng một Speed Roll, Might Roll, Sanity Roll, và Knowledge Roll token, cùng với Fountain token. Nếu Ballroom, Dusty Hallway, Gymnasium, Larder, Master Bedroom, và Operating Laboratory không có trong cuộc chơi, tìm chúng, đặt chúng, và xáo lại. Đặt quân của bạn vào Ballroom.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng còn sống thoát qua cửa trước của Entrance Hall (đáng tiếc, nó bị khóa).',
      },
      {
        heading: 'Cách Cản Trở Phe Đối Địch',
        body: 'Hoàn thành các nhiệm vụ này trước khi các cửa mở; mỗi anh hùng có thể thử một nhiệm vụ mỗi lượt, và mỗi chiến thắng làm choáng một quái vật (đưa nó về phòng xuất phát). Diễn một vở hài kịch (Theater): đổ Speed, Might, Sanity, hoặc Knowledge 3+; thất bại đặt Trait Roll token đó vào Theater (mỗi cái tính là một chiến thắng). Trèo lên tháp radio (Tower): ba lần, Might 3+ để đặt ô phòng trên cùng dưới Tower (thất bại → 1 sát thương vật chất mỗi ô); mỗi ô là một chiến thắng. Bơi đồng bộ (Underground Lake): hai anh hùng mỗi người đổ 4 xúc xắc nhắm tới cùng một số (bỏ một lá bài để đổ lại); tất cả khớp là một chiến thắng (đặt Fountain ở đó). Cả tám chiến thắng (4 Trait Roll token, 3 ô dưới Tower, và Fountain) mở khóa cửa trước.',
      },
      {
        heading: 'Cách Bẻ Cong Thời Gian',
        body: 'Cuối lượt của bạn, bỏ Time token để ghi lại các chỉ số, phòng, và lá bài hiện tại của bạn (một Time Slip — Phiếu Thời Gian). Vào đầu một lượt sau, di chuyển tới phòng đó và đặt lại các chỉ số và lá bài của bạn theo phiếu (bạn có thể lấy một lá bài từ nhà thám hiểm khác hoặc lục một chồng bài, rồi xáo lại); xé bỏ phiếu.',
      },
    ],
    monsters: [],
  },

  90: {
    id: 90,
    title: 'Xung Đột Nội Bộ',
    intro:
      'Sếp tạo ra một vị trí mới — Thực Tập Sinh Trưởng — và một trong những người bạn cũ của bạn được nhận. Giờ họ được sai khiến cả bạn nữa, và những Employee chính thức kia đặc biệt cáu kỉnh khi thiếu Coffee.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nếu có ít hơn năm phòng ở bất kỳ tầng nào, đặt thêm phòng cho đến khi mỗi tầng có ít nhất năm phòng. Đặt một Obstacle token (một Employee chính thức) vào mỗi phòng có biểu tượng Event.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn là thực tập sinh cuối cùng còn sống.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Của Mình',
        body: 'Nếu bạn khám phá một phòng Event, đặt một Employee vào phòng đó trước khi bạn rút lá Event.',
      },
      {
        heading: 'Cách Giao Coffee',
        body: 'Để giao một Coffee, kết thúc lượt của bạn ở cùng phòng với một Employee và gỡ nó về thẻ bài của bạn. Nếu bạn giao một Coffee trong lượt này, tăng Speed của bạn 1; nếu không, hạ Sanity của bạn 1.',
      },
      {
        heading: 'Cách Được Thăng Chức',
        body: 'Cướp Badge (Phù Hiệu) của Thực Tập Sinh Trưởng bằng cách đánh bại họ chênh 2 trở lên với một tấn công Might, hoặc cướp nó từ xác chết của họ. Ai đeo nó sẽ nhận mọi năng lực của Thực Tập Sinh Trưởng và đọc Traitor\'s Tome; nhà thám hiểm mất nó bị giáng xuống làm Thực Tập Sinh thường.',
      },
    ],
    monsters: [],
  },

  91: {
    id: 91,
    title: 'Thiêu Cháy Bóng Tối',
    intro:
      'Bóng tối rỉ ra từ ngôi nhà như dầu, phủ lên mọi thứ; chỉ lửa mới ngăn được nó. Ngọn lửa thanh tẩy. Có vẻ như bạn có việc phải làm rồi.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Haunt này có thể có nhiều kẻ phản bội: anh hùng bên trái kẻ phản bội chọn một người không phải kẻ phản bội để gia nhập phe anh hùng, rồi kẻ phản bội chọn một người gia nhập phe phản bội; lặp lại cho đến khi mọi người được phân loại. Nếu có ít hơn năm phòng ở mỗi tầng, rút cho đến khi có năm. Nếu Stairs from Basement không có trong cuộc chơi, tìm nó, đặt nó, và xáo lại (ở đây nó tính như một phòng đáp xuống). Mỗi anh hùng lấy 15 monster token nhỏ cùng một màu (lục, cam, hoặc đỏ) — Fire (Lửa) của họ — và đặt một cái úp mặt vào phòng của mình. Anh hùng bên trái kẻ phản bội đi lượt đầu tiên.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Mọi phòng trong nhà đều bị thiêu cháy. Thiêu rụi nó bằng lửa!',
      },
      {
        heading: 'Cách Thiêu Rụi Ngôi Nhà',
        body: 'Khi bạn vào một phòng, bạn có thể đặt một Fire token của mình ở đó úp mặt. Đầu lượt của bạn, Lửa lan ra: đặt một Fire token của bạn úp mặt vào mỗi phòng nối với một Fire ngửa mặt cùng màu của bạn (trừ khi nó đã có một cái cùng màu của bạn; Roof Landing nối với Upper Landing tới Grand Staircase, và Foyer tới Stairs from Basement). Sau đó phá hủy mỗi phòng không phải phòng đáp xuống có một Fire ngửa mặt (gỡ quân/token, trả lại Fire token, lật phòng). Anh hùng trong một phòng úp mặt di chuyển tới phòng ngửa mặt gần nhất và đổ Speed; kết quả dưới 2 cộng với số ô đã di chuyển khiến nhận 2 xúc xắc sát thương vật chất. Cuối cùng, lật ngửa mọi Fire úp mặt của bạn.',
      },
      {
        heading: 'Luật Di Chuyển Đặc Biệt',
        body: 'Coi các ô phòng úp mặt như thể chúng có cửa ở mỗi cạnh, và chúng không chặn tầm nhìn.',
      },
    ],
    monsters: [],
  },

  92: {
    id: 92,
    title: 'Hồn Ma Ở Vạch Đích',
    intro:
      'Một tay đua ma quái thách thức bạn: "Đua một trận thế nào? Người thắng thì thắng. Kẻ thua... thì thua. Các vận động viên vào vị trí, sẵn sàng, chuẩn bị, BẮT ĐẦU!" Không ai trong các bạn là kẻ phản bội, nhưng tất cả đều đua tranh để thắng haunt này.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Không ai trong các bạn là kẻ phản bội, nhưng tất cả đều đua tranh. Ghi lại tổng số lá Item và Omen trước mặt mỗi anh hùng, rồi xáo toàn bộ lá bài của các nhà thám hiểm trở lại chồng của chúng. Đặt Ghost token tròn lớn (the Runner) vào Gymnasium và để riêng bảy monster token tròn lớn ngẫu nhiên khác. Mỗi người chơi bí mật viết một thuộc tính chung của lá bài lên mỗi tờ trong ba tờ giấy, úp mặt. Bốc ngẫu nhiên sáu tờ và đọc to — đây là các tiêu chí của the Runner (thay tờ trùng bằng cách bốc tờ khác). Chia cho mỗi anh hùng đúng số lá bài họ có trước đó.',
      },
      {
        heading: 'Điều Bạn Biết Về the Runner',
        body: 'The Runner là một hồn ma muốn những món quà giống thứ hắn yêu khi còn sống, và ban năng lực ma quái dựa trên việc quà của bạn khớp đến đâu.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn khám phá ra ô phòng cuối cùng. Nếu đến lúc không thể đặt thêm phòng nào nữa, nhà thám hiểm đặt ô cuối cùng sẽ thắng.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Của Mình',
        body: 'Đầu lượt của bạn, tặng the Runner một món quà từ bất kỳ phòng nào (bỏ một lá Item hoặc Omen, kể cả lá không thể thả), rồi kiểm tra xem bạn khớp bao nhiêu tiêu chí trên bảng Số Tiêu Chí Khớp. Nếu bạn không thể tặng quà, coi như khớp không tiêu chí.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Bạn không thể gây sát thương cho các nhà thám hiểm khác, nhưng bạn có thể cướp lá Item. The Runner không thể bị gây sát thương. Đầu lượt của bạn, nếu bạn không thể tặng quà cho the Runner, hắn thực hiện một tấn công Sanity vào bạn (Sanity bằng số monster token tròn lớn trong chồng của hắn, kể cả bản thân hắn); rồi đặt một monster lớn dưới hắn (tối đa tám).',
      },
      {
        heading: 'Số Tiêu Chí Khớp',
        body: '0 Bạn bị the Runner tấn công. 1 +1 ô di chuyển trong lượt này. 2 +2 ô di chuyển trong lượt này. 3 Khám phá một phòng mới không kết thúc di chuyển của bạn trong lượt này. 4+ Một lần trong lượt này bạn có thể dịch chuyển tới bất kỳ phòng nào (và cũng chọn một trong các năng lực khác).',
      },
    ],
    monsters: [],
  },

  93: {
    id: 93,
    title: 'Lâu Đài Di Động Của Owl',
    intro:
      'Xương kêu răng rắc dưới chân khi ngôi nhà rung lên — nó đang di chuyển. Hai con mắt long lanh nhìn xuống từ xà nhà và bạn nghe một tiếng "cú" khe khẽ. Con cú đó khiến bạn nhớ tới người bạn thân nhất của mình. Hẳn phải có cách nào đó để đưa họ trở lại.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Đặt ba explorer token tương ứng của bạn lên thẻ nhân vật.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Kẻ phản bội muốn tất cả các bạn làm Owls mãi mãi. Ngôi nhà của họ đang tiến về một vách đá; khi các phần rơi xuống, chúng mất đi — và cách duy nhất để sống sót khi ở trên một ô như vậy là biến thành Owl.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn biến kẻ phản bội trở lại thành Human.',
      },
      {
        heading: 'Cách Biến Hình',
        body: 'Human sang Owl: mất 1 Sanity và bỏ explorer token khỏi quân của bạn (nếu Sanity sắp chạm ngưỡng tử, bỏ một token thay vào đó). Owl sang Human: chuyển một explorer token từ thẻ bài lên quân của bạn; khi không còn token nào, bạn mắc kẹt làm Owl.',
      },
      {
        heading: 'Cách Hành Động Khi Bạn Là Owl',
        body: 'Bạn có thể bay: di chuyển trên các ô đã lật và băng qua các ô không tồn tại nếu bạn vào/ra qua một cửa sổ hoặc phòng ngoài trời (mỗi ô trống = 2 di chuyển; ở cùng tầng; kết thúc trên một ô). Speed của bạn được nhân đôi (tối đa 8 xúc xắc khi đổ Speed); không có sát thương do rơi. Bạn không thể tấn công hay dùng lá bài. Bạn có thể kêu "cú" tùy thích.',
      },
      {
        heading: 'Cách Hành Động Khi Bạn Là Human',
        body: 'Bạn không thể đi trên các ô đã lật; để vượt qua một ô như vậy, bạn phải biến thành Owl. Bạn vẫn có thể kêu "cú" — chỉ là nghe hơi kỳ.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Khi là Human, thực hiện một tấn công Knowledge vào kẻ phản bội nếu họ là Owl; hạ Knowledge của họ xuống ngưỡng tử sẽ đặt lại nó lên một bậc trên đó và biến họ trở lại thành Human. Trước một tấn công vật chất khi là Human chống lại một kẻ phản bội Owl, bạn phải đổ Speed 4+ trước hoặc họ bay ra ngoài tầm với (thất bại = không tấn công trong lượt này).',
      },
    ],
    monsters: [],
  },

  94: {
    id: 94,
    title: 'Di Chúc Và Đấu Trường',
    intro:
      'Người dì lập dị Aunt Edwina của bạn đã qua đời, và các bạn tụ họp để đọc di chúc, phân chia bộ sưu tập rùng rợn của bà. Đến một lúc nào đó, lòng tham phủ lên tất cả các bạn, và kẻ phản bội cất tiếng nói bằng giọng của bà: "Bỏ đồ của tôi xuống, và cút khỏi nhà tôi!"',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Để riêng các Item Pile token. Nếu số phòng Item ít hơn số nhà thám hiểm, rút ô phòng và đưa các phòng có biểu tượng Item vào cuộc chơi cho đến khi đủ. Mỗi anh hùng rút một lá Item, rồi đếm các lá Item và Omen có thể trao đổi hoặc bị cướp của họ (đây là các Bequests — Di Vật của bạn).',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Kẻ phản bội bị nhập bởi linh hồn tham lam của Aunt Edwina, quyết tâm thu hồi những món thú vị nhất trong bộ sưu tập của bà — những món các bạn đang giữ.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn giam linh hồn của Aunt Edwina vào trong một món gia bảo, giải thoát chính các bạn và ngôi nhà.',
      },
      {
        heading: 'Cách Bắt Giữ Linh Hồn Của Edwina',
        body: 'Nếu kẻ phản bội đến lúc không còn Bequest nào, một anh hùng trong phòng có biểu tượng Omen có thể nói "Ngươi được tự do" và thả một Bequest để rút linh hồn bà ra vào món gia bảo — và các anh hùng thắng.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Bạn chỉ có thể tấn công kẻ phản bội theo cách thông thường. Mỗi lượt một lần, thử cướp một Bequest của một nhà thám hiểm trong phòng bạn bằng Sanity hoặc Knowledge (+1 xúc xắc trong phòng Item); nếu thắng, đổ trên bảng Bequest Disposition (đợt tấn công không gây sát thương).',
      },
      {
        heading: 'Luật Vật Phẩm Và Điềm Báo Đặc Biệt',
        body: 'Bạn không được tự nguyện trao đổi hay thả lá bài, và phải nhặt mọi lá bài bị thả trong phòng của bạn. Khi bạn chết, thả tất cả Bequest vào một item pile; với mỗi cái, đổ 1 xúc xắc — mặt trống thì bỏ nó đi.',
      },
    ],
    monsters: [],
  },

  95: {
    id: 95,
    title: 'Nanny, Gián Đoạn',
    intro:
      'Giọng của Nanny vọng ra từ các bức tường: "Sao mà lũ trẻ lại chui ra khỏi nôi được thế này? Chơi đùa có thời điểm và chỗ của nó, và bây giờ không phải lúc!" Các trần nhà dâng cao lên khi bạn thu nhỏ lại.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Để riêng các Item Pile token.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả các bạn ở bên ngoài cửa trước cạnh Entrance Hall (nó bị khóa).',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Của Mình',
        body: 'Đầu lượt của bạn, nhận 1 xúc xắc sát thương vật chất và 1 xúc xắc sát thương tinh thần (2 xúc xắc cả hai nếu bạn bắt đầu ở Nursery).',
      },
      {
        heading: 'Luật Sát Thương Đặc Biệt',
        body: 'Khi bạn nhận sát thương tinh thần, dồn hết vào Knowledge; sát thương vật chất, dồn hết vào Might. Khi bạn nhận sát thương Might, tăng Speed của bạn bằng lượng bạn đã hạ Might. Nếu một chỉ số tụt xuống ngưỡng tử, bạn trở thành em bé cho phần còn lại của ván (di chuyển ít nhất 1 ô, đổ 0 với các chỉ số ở ngưỡng tử, không thể nhận sát thương, chỉ nói tiếng em bé).',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Khi là em bé, bạn có thể tấn công Nanny bằng Speed. Thua → không gây sát thương nhưng bà ta bế bạn lên. Thắng → bà ta không nhận sát thương nhưng làm rơi số vật phẩm, lá Omen, và/hoặc anh hùng đang được bế bằng độ chênh lệch (bạn có thể ném các anh hùng được giải thoát sang các phòng kề bên). Nếu bạn bị bế lên, điều đầu tiên bạn phải làm trong lượt là tấn công Nanny để được thả xuống.',
      },
      {
        heading: 'Luật Di Chuyển Đặc Biệt',
        body: 'Bò ra một cửa sổ hoặc đặc điểm ngoài trời trên mái (5 xúc xắc vật chất), tầng trên (3 xúc xắc), hoặc tầng trệt (1 xúc xắc); không có sát thương với Rope hoặc khi là em bé. Bạn có thể đi vòng quanh chu vi tầng trệt và trốn trong dumbwaiter (+2 xúc xắc phòng thủ). Nếu một chỉ số ở ngưỡng tử và bạn cần đổ nó cho một đặc điểm phòng, bạn tự động thành công.',
      },
      {
        heading: 'Luật Vật Phẩm Và Điềm Báo Đặc Biệt',
        body: 'Bạn mang tối đa một lá Item hoặc Omen cho mỗi điểm Might (tối thiểu một); thả phần dư vào một Item Pile.',
      },
    ],
    monsters: [],
  },

  96: {
    id: 96,
    title: 'Ngôi Nhà Của Tàn Tích',
    intro:
      'Bạn bị kéo vào một chiều không gian khác. Một người bạn lủi đi cười khằng khặc, và bạn nghe những giọng ma quái van xin cùng tiếng khịt mũi của một con... minotaur rất to, có lẽ? Thật khó mà biết được điều gì là thật ở đây.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Đặt quân của tất cả anh hùng vào Entrance Hall. Bỏ các ô phòng chưa khám phá trở lại hộp. Để riêng ô Abandoned Room. Nhặt tất cả các ô không phải phòng đáp xuống đã khám phá, chia chúng thành hai chồng bằng nhau, xáo Abandoned Room vào một chồng, và đặt chồng đó dưới chồng kia (để Abandoned Room nằm ở nửa dưới). Đặt explorer token của kẻ phản bội lên lá Omen đã khởi phát haunt.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bất kỳ anh hùng nào kết thúc lượt với tất cả anh hùng còn sống ở trong Abandoned Room.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Chỉ anh hùng đang mang lá Omen đã khởi phát haunt mới có thể tấn công kẻ phản bội. Bạn có thể thực hiện tấn công Sanity vào Minotaur nếu nó nằm trong tầm nhìn của bạn; nếu bạn đánh bại nó, di chuyển nó tới bất kỳ phòng nào trong tầm nhìn của bạn.',
      },
      {
        heading: 'Luật Di Chuyển Đặc Biệt',
        body: 'Mọi phòng bạn khám phá đều là "mới" và phải được khám phá theo cách thông thường. Minotaur có thể để lại Claw Marks (Vết Cào); nếu một nhà thám hiểm rút Abandoned Room và nó sẽ bị đặt kề một Claw Mark, xáo nó trở lại, rồi đặt nó bất kể vị trí nếu được rút ra ngay lập tức lần nữa.',
      },
    ],
    monsters: [],
  },

  97: {
    id: 97,
    title: 'Cừu Đưa Tới Lò Mổ',
    intro:
      'Tiếng tru ghê rợn, rồi tiếng đập. Những đôi mắt đỏ rình mò ngoài cửa sổ; một con Wolf lao mình vào cửa. "Ưuuuuu." Khoan đã — tiếng tru đó phát ra từ trong nhà sao? Nó phát ra từ chính bạn ư?',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Lấy các monster token vàng nhỏ (Origins — Nguồn Gốc) đánh số từ 1 đến số nhà thám hiểm; xáo chúng úp mặt và chia cho mỗi nhà thám hiểm một cái (đừng nhìn). Nếu có ít hơn năm cửa tầng trệt đang mở (kể cả cửa trước), rút phòng tầng trệt cho đến khi có năm. Đặt một monster token đỏ (Wolf) bên ngoài năm cửa tầng trệt đang mở khác nhau (các cửa Barricaded). Để riêng các Obstacle token (Barricades) 1–16: đặt các token 12–16 úp mặt lên năm cửa Barricaded, rồi một trong mười một cái còn lại bên cạnh mỗi cửa (hai cái mỗi cửa); xáo các token của mỗi cửa thành một chồng. Số còn lại tạo thành một Shed úp mặt. Theo thứ tự lượt từ người mở haunt, mỗi nhà thám hiểm đặt quân của mình vào một phòng đáp xuống hoặc phòng có dumbwaiter khác nhau.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Một trong các bạn do Wolves nuôi lớn, nhưng không ai biết là ai — kể cả chính nhà thám hiểm đó. Kẻ phản bội xây các Barricade bị phá hoại để giấu Origin của mình, thứ sẽ được tiết lộ nếu kẻ phản bội chết.',
      },
      {
        heading: 'Nếu Bạn Không Do Sói Nuôi, Bạn Thắng Khi',
        body: 'Bạn giết kẻ phản bội. Mỗi lần một nhà thám hiểm chết, tiết lộ Origin của họ; nếu nó mang số 1, các nhà thám hiểm còn lại thắng.',
      },
      {
        heading: 'Nếu Bạn Do Sói Nuôi, Bạn Thắng Khi',
        body: 'Bạn có Origin mang số 1 và hoặc tất cả các anh hùng khác đã chết hoặc Wolves đã phá vào được nhà.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Của Mình',
        body: 'Cuối lượt của bạn, Wolves tấn công: chọn một cửa Barricaded có nhiều Barricade nhất và lật một cái. Nếu mang số 1–5, nó bị phá hoại (đặt nó và Barricade kế tiếp vào Shed và xáo lại). Nếu không, đổ 1 xúc xắc — mặt trống thì xáo nó trở lại, mặt không trống thì đặt nó vào Shed. Nếu không còn Barricade nào và đổ ra mặt không trống, Wolves giết tất cả nhà thám hiểm trừ con sói con thất lạc của chúng. Ngoài ra, nếu bạn kết thúc lượt một mình với một nhà thám hiểm khác, bạn có thể xem Origin của họ (trả lại); bạn có thể nói bất cứ điều gì về nó, đúng hay không.',
      },
      {
        heading: 'Luật Hành Động Đặc Biệt',
        body: 'Mỗi lượt một lần trong một phòng có cửa Barricaded, xây hoặc kiểm tra một Barricade. Xây: rút ba cái từ Shed, xáo một cái vào chồng của cửa, trả lại số còn lại. Kiểm tra: xem Barricade trên cùng và đặt nó lên đầu hoặc xuống đáy chồng.',
      },
      {
        heading: 'Luật Di Chuyển Đặc Biệt',
        body: 'Bạn không thể di chuyển qua, nhìn xuyên qua, hay khám phá các phòng ở phía bên kia của các cửa Barricaded.',
      },
    ],
    monsters: [],
  },

  98: {
    id: 98,
    title: 'Nhựa Tuyệt Vời',
    intro:
      'Bạn đến để tìm sự yên bình tĩnh lặng, nhưng nhà nghỉ đầy những mannequin mắt đờ đẫn đã hấp thụ ý thức của bạn bạn. Lúc này chúng còn ngoan ngoãn. Lúc này thôi.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Bỏ tất cả các lá Item và Omen vũ khí, và rút một số lá Item không phải vũ khí bằng đúng số đó.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả các Mannequin đã rời khỏi nhà và ít nhất một anh hùng vẫn còn sống.',
      },
      {
        heading: 'Luật Di Chuyển Đặc Biệt',
        body: 'Để di chuyển, tất cả Mannequin ngửa mặt trong một phòng tính là một quái vật.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Mannequin bằng nhựa và không thể bị gây sát thương bởi tấn công vật chất. Nếu bạn kết thúc lượt trong một phòng có một hay nhiều Mannequin ngửa mặt, bạn có thể tấn công bằng Sanity hoặc Knowledge; số Mannequin ngửa mặt là số xúc xắc đổ chống lại bạn. Nếu bạn đánh bại chúng, lật úp tất cả trong phòng; nếu không, nhận sát thương tinh thần thông thường.',
      },
      {
        heading: 'Luật Vật Phẩm Và Điềm Báo Đặc Biệt',
        body: 'Nếu bạn rút một vũ khí từ chồng Item hoặc Omen, bỏ nó và rút một cái khác từ chính chồng đó.',
      },
    ],
    monsters: [],
  },

  99: {
    id: 99,
    title: 'Dinh Thự Của Cái Chết Của Bạn',
    intro:
      'Một cái hộp âm ỉ hút bạn vào, đầu trước, và bạn thấy mình ở lối vào của một dinh thự cổ nhỏ xíu. Nếu bạn không điều tra ngôi nhà này, bạn sẽ không bao giờ có thể ngừng chơi trò chơi này.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhặt mọi ô không phải phòng đáp xuống và xáo chúng trở lại chồng phòng. Đặt quân của mỗi nhà thám hiểm còn sống vào Entrance Hall (những người đã chết không tham gia lại); giữ các chỉ số và lá Item hiện tại của bạn. Bỏ tất cả các lá bài khác (nếu việc này sẽ làm một chỉ số tụt xuống ngưỡng tử, hạ nó về giá trị thấp nhất ngay trên đó). Xáo tất cả các chồng bài bỏ trở lại chồng của chúng. Đặt đồng hồ đếm 30:00, hoặc một nửa thời gian bạn đặt lần cuối cho haunt này (lấy cái thấp hơn). Bắt đầu đồng hồ và bắt đầu một ván mới của Betrayal at House on the Hill.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn rút lá Omen Box trong ván mới này. Bạn thua khi tất cả nhà thám hiểm đã chết, hoặc đồng hồ về 0:00 mà bạn chưa tìm thấy Box.',
      },
      {
        heading: 'Luật Sát Thương Đặc Biệt',
        body: 'Vì bạn đã mở haunt trong ván trước, các chỉ số của bạn giờ có thể tụt xuống ngưỡng tử. Nếu điều đó xảy ra, bạn chết và không quay lại.',
      },
      {
        heading: 'Luật Haunt Đặc Biệt',
        body: 'Mặc dù bạn đã mở một haunt trước đó, bạn chưa mở haunt nào trong ván này. Thực hiện một lần đổ haunt vào cuối lượt của bạn nếu bạn rút một lá Omen khác Box. Nếu bạn mở haunt trong ván mới này, đọc lại haunt này từ đầu.',
      },
    ],
    monsters: [],
  },

  100: {
    id: 100,
    title: 'Chơi Một Trò Chơi Nào',
    intro:
      'Một cuốn băng cassette rè rè phát ra một lời mời kiểu Saw: ngôi nhà đầy những thử thách do một kẻ điên thiết kế, sẵn sàng bốc cháy cùng bạn bên trong. Mỗi người phải chọn — bạn tin tưởng bạn bè mình, hay tự mình hành động?',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Bạn có thể đặt lại bất kỳ chỉ số nào của mình lên 1 trên giá trị khởi đầu của chúng. Đặt 24 Obstacle token (Challenges — Thử Thách) úp mặt ngẫu nhiên vào các phòng không có nhà thám hiểm, rải tương đối đều khắp các tầng (để riêng số dư). Mở Traitor\'s Tome tới haunt này để xem các Challenge. Đặt thanh Lượt/Sát thương về 8 trước mặt người mở haunt. Mỗi nhà thám hiểm lấy một monster token đỏ và một xanh; xem lại Cách Bỏ Phiếu, rồi bí mật chọn một và cùng tiết lộ.',
      },
      {
        heading: 'Cách Bỏ Phiếu',
        body: 'Đỏ (đơn độc): tự mình đánh bại bốn Challenge, giảm số lượng đi 1 cho mỗi nhà thám hiểm bạn giết; khi bạn thực hiện một tấn công vật chất, cướp một vật phẩm nếu bạn thắng chênh 2 trở lên. Xanh (đồng đội): hợp tác với mọi người khác đã bỏ phiếu xanh, đánh bại số Challenge bằng ba lần số đồng đội còn sống. Nếu một đội hình thành, lục chồng Item và chồng bài bỏ để tìm Amulet of the Ages, Ceremonial Robe, Chainsaw, Medical Kit, Pickpocket Gloves, và Rabbit\'s Foot, và chia cho mỗi đồng đội một lá (xáo số còn lại vào).',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn đánh bại tất cả Challenge của mình trước khi chết hoặc trước khi thanh Lượt/Sát thương về 0. Ai chưa giành chiến thắng khi có người thắng hoặc khi haunt kết thúc sẽ bị thiêu chết trong lửa.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Người Mở Haunt',
        body: 'Đầu lượt của người mở haunt (kể cả khi họ đã chết), hạ thanh Lượt/Sát thương.',
      },
      {
        heading: 'Cách Tiết Lộ Và Đánh Bại Challenge',
        body: 'Khi bạn khám phá một phòng mới và còn Challenge được để riêng, đặt một cái úp mặt ở đó. Trong một phòng có Challenge úp mặt, tốn 3 di chuyển để bí mật xem trước số của nó, hoặc tốn 1 di chuyển để lật nó lên và tra mục của nó để cố đánh bại nó (việc này kết thúc di chuyển của bạn). Đánh bại được thì đặt token lên thẻ bài của bạn. Trong một đội, bạn tính là đồng đội của chính mình theo chữ của Challenge.',
      },
    ],
    monsters: [],
  },
};
