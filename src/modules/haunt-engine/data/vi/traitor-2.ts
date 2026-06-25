import type { HauntStory } from '../../types';

export const TT_VI_2: Record<number, HauntStory> = {
  27: {
    id: 27,
    title: 'Khối Thịt Điên Loạn',
    intro:
      'Bạn nghe tiếng pha lê vỡ. Khối mô nhân bản của bạn đã thoát khỏi bình chứa và đang phình to. Giá mà bạn đừng dùng loại nguyên sinh chất bất ổn đến thế. Đã đến lúc gom hết bạn bè lại trước khi chúng tự làm mình bị thương khi bỏ chạy khỏi khối thịt đang lớn dần, nuốt chửng tất cả của bạn.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn trở thành kẻ phản bội.\nĐể riêng ít nhất 20 token quái vật nhỏ màu cam để đại diện cho một con Blob đang lớn dần.\nNgười chơi đang cầm lá Crystal Ball bỏ nó đi.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ đang cố tiêu diệt Blob của bạn bằng cách tìm những vật gây hại cho nó và ném vào nó. Bạn có thể cố giết họ hoặc cướp lấy những vật đó.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đều chết hoặc bị biến thành người-Blob.',
      },
      {
        heading: 'Con Blob',
        body: 'Trong lượt quái vật đầu tiên, Blob nuốt chửng phòng có Crystal Ball và mỗi phòng kề bên thông qua cửa (đặt token Blob). Mỗi lượt quái vật sau đó, nó lan vào mỗi phòng kề bên qua cửa (dùng cửa, cầu thang và di chuyển đặc biệt, nhưng không dùng Mystic Slide; nó cũng có thể lan lên/xuống qua Coal Chute, Gallery và Collapsed Room). Sau khi lan, đổ 1 xúc xắc; nếu ra 2 thì lan thêm lần nữa. Token Blob không phải quái vật — chúng không tấn công và không bị ảnh hưởng bởi hiệu ứng quái vật, Bell hay Spirit Board. Nếu Blob tiến vào Mystic Elevator, thang sẽ ngừng hoạt động.',
      },
      {
        heading: 'Người-Blob',
        body: 'Bất kỳ ai ở trong phòng có token Blob (kể cả bạn) lập tức trở thành người-Blob, bỏ hết item/omen (đặt token lên lá của họ), và bị người chơi của họ điều khiển để giúp bạn thắng. Người-Blob không thể tấn công, bị tấn công, rút lá, dùng thang máy, khám phá phòng hay mang item; nó di chuyển trong lượt của người chơi nó và đi tự do qua các phòng Blob. Đầu lượt quái vật, đặt một token Blob vào bất kỳ phòng nào có người-Blob (nó không lan ra từ đó cho đến khi nối được với khối Blob lớn hơn).',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Khối mô nhân bản của bạn lấp đầy gần hết căn nhà — bạn bè bạn, lũ sâu bọ, lũ bướm đêm, tất cả hòa làm một với khối Blob. Bạn ngã ngửa ra sau, dang rộng hai tay, vào vòng tay đang chờ đợi của khối thịt sủi bọt.',
      },
    ],
    monsters: [{ name: 'Người-Blob', stats: 'Speed 2' }],
  },

  28: {
    id: 28,
    title: 'Chiếc Nhẫn Của Vua Solomon',
    intro:
      'Hồi nhỏ bạn đã tìm thấy những ngôi sao năm cánh dưới sàn phòng ngủ — và cội nguồn của những giấc mơ đẫm máu. Những giọng nói đã chỉ cho bạn cách chuẩn bị cho Sự Giáng Lâm. Giờ Sự Giáng Lâm đã cận kề. Địa ngục đã đến.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn trở thành kẻ phản bội.\nChọn căn phòng có cổng từ Địa Ngục: một phòng event không có người, cách nhà thám hiểm gần nhất ít nhất 4 phòng (hoặc xa nhất có thể).\nĐặt token Demon Lord lớn hình tròn ở đó, cộng thêm các token Demon nhỏ màu vàng được đánh số từ 1 cho đến bằng số anh hùng lúc lật haunt (tối đa 4).',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ đang cố giết lũ Demon.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đều chết.',
      },
      {
        heading: 'Mỗi Demon Phải Làm Điều Này',
        body: 'Trong lượt quái vật, mỗi Demon di chuyển hết tốc lực về phía anh hùng gần nhất mà nó có thể tấn công (đường đi tốt nhất) và tấn công nếu có thể (bạn chọn khi hòa).',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Một Demon có thể cướp Chiếc Nhẫn thay vì gây sát thương; Demon đang cầm nhẫn không thể dùng/trao đổi/thả nó, nhưng một nhà thám hiểm đánh bại Demon đó với chênh 2+ có thể cướp lại. Không thể dùng đòn tấn công Speed nhắm vào Demon Lord.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Cổng Địa Ngục đã mở. Những thân xác chồng chất của các bạn đồng hành tạo thành một ngai bằng thịt cho chúa quỷ. Tiếng la hét chỉ mới bắt đầu. Đúng như bạn vẫn hằng mơ.',
      },
    ],
    monsters: [
      { name: 'Demon 1', stats: 'Speed 3 · Might 5 · Sanity 5' },
      { name: 'Demon 2', stats: 'Speed 4 · Might 4 · Sanity 4' },
      { name: 'Demon 3', stats: 'Speed 5 · Might 3 · Sanity 3' },
      { name: 'Demon 4', stats: 'Speed 6 · Might 2 · Sanity 2' },
      { name: 'Demon Lord', stats: 'Speed 2 · Might 7 · Sanity 7' },
    ],
  },

  29: {
    id: 29,
    title: 'Di Sản Của Frankenstein',
    intro:
      'Bạn đọc một cuốn sổ tay phòng thí nghiệm: "Thứ từng chết có thể được hồi sinh!" Với sự phấn khích dâng trào, bạn nhận ra mình có thể hoàn thành thí nghiệm này. Bạn phải làm. Nhân danh khoa học.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn trở thành kẻ phản bội.\nĐặt token Frankenstein\'s Monster lớn hình tròn vào Research Laboratory hoặc Operating Laboratory (hoặc tìm một tile, đặt nó ở tầng trên với token nằm trên đó, rồi xáo lại).',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ cho rằng Monster của bạn là một thứ gớm ghiếc và sẽ cố giết nó. Họ cũng biết nó dễ bị tổn thương trước lửa.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đều chết.\nMonster luôn phải di chuyển hết tốc lực về phía anh hùng gần nhất (bạn chọn khi hòa) và tấn công nếu có thể.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Khi đổ xúc xắc tấn công, Monster cộng 2 vào kết quả (không có cộng thưởng khi phòng thủ). Nó miễn nhiễm với đòn tấn công Speed. Nếu bạn đánh bại một anh hùng với chênh 2+ bằng đòn Might, bạn có thể cướp một token Torch thay vì gây sát thương và tự động phá hủy nó.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Bạn lột da các bạn cũ của mình, cẩn thận để không rách quá nhiều. Với lượng da, nội tạng, răng và xương dư dả, bạn có thể tái tạo thí nghiệm từ đầu. Khoa học chẳng tuyệt vời sao?',
      },
    ],
    monsters: [
      { name: 'Frankenstein\'s Monster', stats: 'Speed 3 · Might 8' },
    ],
  },

  30: {
    id: 30,
    title: 'Hầm Mộ Của Dracula',
    intro:
      'Cô gái trông có vẻ bơ vơ. Khi cô cầm tay bạn, bạn rùng mình — không bàn tay người sống nào lạnh đến thế. Rồi cô mở miệng và bạn thấy hàm răng nanh. Một lúc sau bạn tỉnh dậy, cảm thấy tuyệt vời. Nhưng cũng khát kinh khủng, khát đến tột cùng.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn trở thành kẻ phản bội. Giờ bạn là một Vampire — cộng 1 vào mỗi chỉ số.\nĐặt token Dracula lớn hình tròn vào Crypt hoặc Graveyard (hoặc một phòng không có người, cách ít nhất 4 phòng).\nBỏ lá Girl và đặt một token quái vật màu đỏ tía vào phòng bạn (cô Dâu).\nThiết lập thanh Lượt/Sát thương với kẹp ở mức 0.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Mặt trời sắp lên. Hãy giết các anh hùng nhanh chóng — lũ Vampire yếu dần khi mặt trời mọc (các anh hùng sẽ cho bạn biết cụ thể).',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đều chết hoặc bị biến thành Vampire. Nếu bạn thắng và Vampire của người chơi khác đã giết một anh hùng, người chơi đó cũng thắng.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này',
        body: 'Đầu lượt của mình, nâng thanh Lượt/Sát thương (bắt đầu từ 1).',
      },
      {
        heading: 'Lũ Vampire',
        body: 'Dracula không di chuyển hay tấn công cho đến Lượt 2 (vẫn có thể phòng thủ). Mỗi lần bất kỳ Vampire nào cố vào Chapel hoặc phòng có anh hùng đang cầm Holy Symbol, nó phải đổ Sanity 6+ nếu không thì không vào được (chỉ đổ một lần nếu Holy Symbol nằm trong Chapel).',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Thống Trị: một Vampire tấn công anh hùng khác giới có thể thực hiện đòn tấn công Sanity; nếu thắng, anh hùng chịu sát thương Speed thay vì tinh thần (có thể thực hiện từ phòng kề bên, và bạn có thể đưa anh hùng bị đánh bại vào phòng của Vampire). Khi Speed của một anh hùng tụt xuống biểu tượng đầu lâu (ngưỡng tử) qua Thống Trị, họ trở thành Vampire (nâng Speed về mức khởi đầu, +1 mỗi chỉ số, do người chơi của họ điều khiển). Vampire cũng có thể giết anh hùng theo cách thông thường; anh hùng bị giết theo cách đó không biến thành Vampire.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Linh dược của sự sống đập rộn ràng khắp cơ thể bạn như nhịp tim hấp hối của bữa ăn đang giãy giụa. Nhưng như thường lệ, giếng cạn khô. Dracula sẽ biết tìm thêm ở đâu.',
      },
    ],
    monsters: [
      { name: 'Dracula', stats: 'Speed 5 · Might 8 · Sanity 6' },
      { name: 'Cô Dâu', stats: 'Speed 4 · Might 4 · Sanity 4' },
    ],
  },

  31: {
    id: 31,
    title: 'Trên Không',
    intro:
      'Kịch bản này không có kẻ phản bội — chỉ có anh hùng. Tất cả các bạn đều đang cố thoát khỏi căn nhà.',
    sections: [
      {
        heading: 'Nơi Tìm Luật',
        body: 'Tham khảo cuốn Secrets of Survival.',
      },
    ],
    monsters: [],
  },

  32: {
    id: 32,
    title: 'Lạc Lối',
    intro:
      'Quả cầu pha lê lóe sáng và đàn ống thổi vang rền. Căn nhà dịch chuyển và biến đổi. Không khí đặc lại thành sương mù xanh ăn mòn; bên ngoài, bầu trời màu mận tím. Bạn tháo mặt nạ ra — bạn đã về nhà! Tất cả những gì còn lại là thu thập các mẫu vật.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn trở thành kẻ phản bội.\nĐể riêng tất cả các tile phòng đã chơi trừ các tile khởi đầu và các phòng có người; gỡ các token Secret Passage/Stairs/Wall Switch nối tới các phòng được để riêng.\nNếu Organ Room không có trong nhà, hãy tìm nó và gắn vào một tile khởi đầu tùy bạn chọn.\nXáo các tile để riêng cùng với các tile chưa rút và đã bỏ. Di chuyển các phòng có người về cạnh tile khởi đầu của tầng đó.\nĐể riêng 5 token Knowledge Roll hình tam giác.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ đang cố tái kích hoạt cỗ máy dịch chuyển chiều không gian của bạn trong Organ Room để trở về nhà, trong khi mỗi lượt phải chịu sát thương từ bầu không khí độc.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đều chết.',
      },
      {
        heading: 'Cách Ngăn Anh Hùng Trốn Thoát',
        body: 'Làm cho bộ điều khiển khó dùng với con người: thử đổ Knowledge 4+ ở Chapel, Game Room, một trong hai Laboratory, hoặc Pentagram Chamber. Khi thành công, đặt một token Knowledge Roll vào phòng đó (mỗi phòng một token). Mỗi token đã đặt sẽ trừ 3 vào kết quả đổ của anh hùng khi kích hoạt cỗ máy dịch chuyển.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Bạn lăn các mẫu vật của mình tới phòng thí nghiệm và chọn những lọ thủy tinh để cất giữ. Có thể bạn phải cưa bớt vài thứ cho vừa — nhưng không sao. Chúng đã chết rồi.',
      },
    ],
    monsters: [],
  },

  33: {
    id: 33,
    title: 'Lời Triệu Hồi Bóng Tối',
    intro:
      'Tất cả đều nằm ngay đây: nghi lễ đưa một vị thần bóng tối lên trị vì suốt một ngàn năm. Càng đọc, bạn càng khó cưỡng lại bùa chú của cuốn sách. Bạn phải mở cánh cổng triệu hồi vị thần cổ đại.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn trở thành kẻ phản bội.\nĐể riêng token Demon Lord lớn hình tròn (Elder God) và 5 token Knowledge Roll hình tam giác.\nKhôi phục mọi chỉ số dưới mức khởi đầu về mức khởi đầu; sau đó với mỗi chỉ số, đổ 2 xúc xắc và tăng chỉ số đó lên bằng kết quả.\nBạn được thêm một lượt ngay sau khi lật haunt; sau đó lượt chơi tiếp tục từ phía bên trái bạn.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ đang cố phá hủy cuốn Sách, để ngăn việc triệu hồi hoặc xua đuổi Elder God.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đều chết.',
      },
      {
        heading: 'Cách Triệu Hồi Elder God',
        body: 'Mang cuốn Sách tới Chapel hoặc Pentagram Chamber. Tại đó, đổ Knowledge 5+ (mỗi lần đổ dùng 1 ô di chuyển; bạn vẫn có thể đổ kể cả khi Sách bị cướp, miễn là bạn ở trong các phòng đó). Mỗi lần thành công nhận một token Knowledge Roll; ở 5 token, một cánh cổng mở ra trong phòng bạn và Elder God đến — nó giết bạn ngay lập tức (gỡ quân của bạn, thả item), nhưng vào lượt kế tiếp bạn điều khiển nó.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Không gì có thể ngăn bạn! Ia, ia! Hãy để kỷ nguyên của loài người chấm dứt!',
      },
    ],
    monsters: [
      {
        name: 'Elder God',
        stats: 'Speed X (= số người chơi lúc lật haunt) · Might 12 · Sanity 7',
      },
    ],
  },

  34: {
    id: 34,
    title: 'Máy Chém',
    intro:
      'Haunt này dùng luật kẻ phản bội ẩn được mô tả ở trang 17 của sách luật.',
    sections: [
      {
        heading: 'Nơi Tìm Luật',
        body: 'Tất cả người chơi đọc haunt này trong cuốn Secrets of Survival.',
      },
    ],
    monsters: [],
  },

  35: {
    id: 35,
    title: 'Thu Nhỏ',
    intro:
      'Giờ khi các đối tượng thí nghiệm đã yên vị trong nhà cùng lũ mèo của bạn, cuộc vui thực sự mới bắt đầu. Đánh rơi cốc Shrinkital, bạn thu nhỏ mình và các đối tượng xuống cỡ con chuột. Lũ mèo của bạn đã bắt đầu lò dò tiến về phía những đối tượng đang sợ hãi.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn trở thành kẻ phản bội.\nVới 3–4 người chơi, đặt một token Cat (quái vật nhỏ màu đỏ) vào Entrance Hall. Với 5–6 người chơi, đặt một con vào Entrance Hall và một con khác vào phòng nơi lật haunt.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ đang cố thoát khỏi căn nhà bằng một chiếc Toy Airplane.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Hơn một nửa số anh hùng bắt đầu haunt đã bị lũ Cat giết.',
      },
      {
        heading: 'Khi Bị Thu Nhỏ',
        body: 'Item và omen của bạn thu nhỏ theo bạn và hoạt động bình thường. Bạn không thể rút lá — khám phá một phòng có bất kỳ biểu tượng nào sẽ kết thúc lượt của bạn. Mỗi ô cửa tính là một ô (bạn có thể dừng tại đó). Để dùng cầu thang, đổ Might 3+ (nếu không thì kết thúc lượt). Bạn không thể dùng Collapsed Room hay Mystic Elevator, và không bị ảnh hưởng bởi Gallery, Gymnasium hay Vault. Lũ Cat cũng tính ô cửa là một ô và mỗi lần chỉ bắt được một anh hùng.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Bạn không thể tấn công nhà thám hiểm (hãy để lũ Cat ăn họ). Khi một Cat đánh bại một anh hùng, nó chơi trò "mèo vờn chuột" trong một lượt thay vì gây sát thương; vào lượt kế tiếp của anh hùng đó họ có thể trốn thoát (các anh hùng sẽ giải thích cách làm). Nếu ai đó đánh bại Cat trước, nó thả anh hùng ra và bị choáng; nếu không, nó nuốt chửng anh hùng vào đầu lượt quái vật kế tiếp. Một Cat đang giữ Toy Airplane có thể đổ Speed 7+ để vả nó rơi xuống (bạn có thể thử ở 5+), rồi tấn công một anh hùng đang ở trong máy bay.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Sẽ mất nhiều tháng để phân tích dữ liệu, nhưng có một điều đã rõ — lũ mèo của bạn coi thí nghiệm này là một thành công vang dội!',
      },
    ],
    monsters: [{ name: 'Cats', stats: 'Speed 6 · Might 7 · Sanity 5 · Knowledge 5' }],
  },

  36: {
    id: 36,
    title: 'Hay Hơn Khi Có Bạn Bè',
    intro:
      'Nhiều năm trước bạn chết đuối trong đầm lầy ngầm bên dưới căn nhà này và tồn tại dưới dạng một hồn ma. Chiếc huy chương cho bạn trở lại hình hài phàm trần và tìm những người khác để chia sẻ kiếp sống nửa vời của mình. Giờ đã đến lúc họ cùng bạn bước vào cái chết. Cái chết hay hơn khi có bạn bè.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn trở thành kẻ phản bội.\nĐặt một token item hình ngũ giác vào Attic (chiếc Rowboat); đặt nó khi Attic được khám phá nếu cần.\nĐể riêng 4 token Might Roll hình tam giác.\nThiết lập thanh Lượt/Sát thương với kẹp ở mức 0.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Căn nhà đang chìm xuống một đầm lầy ngầm. Các anh hùng sẽ cố trốn thoát.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Hơn một nửa số anh hùng bắt đầu haunt đã chết, hoặc chiếc Rowboat bị vô hiệu hóa.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này',
        body: 'Cuối lượt của mình, nâng thanh Lượt/Sát thương (bắt đầu từ 1).',
      },
      {
        heading: 'Ngập Lụt',
        body: 'Mỗi lượt căn nhà ngập sâu hơn (báo cho người chơi các mức): L1 tầng hầm ngập một phần; L2 tầng hầm ngập hết; L3 + tầng trệt ngập một phần; L4 tầng trệt ngập hết; L5 + tầng trên ngập một phần; L6 cả nhà ngập hết suốt phần còn lại của ván. Ngập lụt ảnh hưởng tất cả anh hùng nhưng không ảnh hưởng bạn (chi tiết hiệu ứng trong Secrets of Survival).',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Bạn có thể tấn công Rowboat một lần mỗi lượt bằng đòn Might — đổ Might 3+ để làm hỏng nó (đặt một token Might Roll lên lá của bạn). Sau 4 token, đòn tấn công Might thành công kế tiếp sẽ vô hiệu hóa Rowboat.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Thân xác vô hồn của các bạn bè trôi nổi cạnh thân xác bạn. Một lúc sau họ mở mắt, và bạn dẫn họ xuống làn nước lạnh lẽo, tối tăm. Bạn dẫn họ về nhà.',
      },
    ],
    monsters: [],
  },

  37: {
    id: 37,
    title: 'Chiếu Bí',
    intro:
      'Lũ ngốc đó đang đọc nhật ký của bác Ebenezer — lời thề đánh bại Tử Thần trong ván cờ. Bộ xương của ông vẫn ngồi bên bàn cờ. Bạn ngờ rằng lũ ngốc này khó làm tốt hơn, nhưng để chắc chắn, bạn sẽ bảo đảm không ai trong số chúng thắng được.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn trở thành kẻ phản bội.\nĐặt một token quái vật nhỏ màu tím (Death) vào cùng phòng với một anh hùng tùy bạn chọn.\nLấy 5 token item hình ngũ giác (Holy Seal) và đặt mỗi cái vào Vault, Crypt, Research Laboratory, Operating Laboratory, và Game Room (đặt ngay bây giờ hoặc khi được khám phá). Báo cho các anh hùng biết có năm cái, nhưng không cho biết phòng chưa khám phá nào có chúng.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Một trong số họ sẽ cố đánh bại Tử Thần trong ván cờ, dùng các Holy Seal. Nếu họ đánh bại Tử Thần dù chỉ một lần, bạn thua.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đều chết. Bạn cũng thắng nếu không có anh hùng nào ở trong phòng của Death vào đầu lượt quái vật (họ bỏ cuộc).',
      },
      {
        heading: 'Death Phải Làm Điều Này',
        body: 'Trong lượt quái vật, Death chơi cờ với nhà thám hiểm có Knowledge cao nhất trong phòng nó. Cả hai đổ Knowledge, nhưng Death gian lận — sau lần đổ đầu tiên nó đổ lại bất kỳ xúc xắc nào ra mặt trắng một lần. So kết quả: hòa thì không gì xảy ra; nếu Death đổ cao hơn thì nó ăn một quân cờ — Death thắng chênh 1–2: mỗi anh hùng mất 1 Sanity; 3–4: mỗi anh hùng mất 1 Might; 5+: "Chiếu" — mỗi anh hùng mất 1 Sanity và 1 Might.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Death không thể tấn công hay bị ảnh hưởng ngoại trừ việc bị đánh bại trong ván cờ. Bạn không thể vào phòng của Death hay tác động đến anh hùng ở đó (không Bell, Revolver hay Dynamite). Bạn không thể nhặt Holy Seal nhưng có thể cướp chúng từ anh hùng.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Bạn biết chúng không thể đánh bại Tử Thần trong ván cờ của chính ông ta. Thì đã sao nếu bạn giúp một tay? Chúng đã chết và biến mất, còn bạn vẫn ở đây. Chiếu bí.',
      },
    ],
    monsters: [{ name: 'Death', stats: 'Knowledge 8' }],
  },

  38: {
    id: 38,
    title: 'Lũ Thú Địa Ngục',
    intro:
      'Firebat chỉ ra ngoài vào ban đêm và không thể sinh sản nếu thiếu máu người. Dù vậy, chúng dễ thương, và chúng là thú cưng của bạn. Bạn đã mang đến cho chúng những con người chúng cần — giờ hãy bảo đảm chúng tiếp cận được nguồn máu.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn trở thành kẻ phản bội.\nGom các token quái vật nhỏ màu đỏ (Firebat). Đặt số lượng bằng nửa số người chơi (làm tròn lên) vào phòng nơi lật haunt.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Máu của họ là thứ lũ Firebat cần để sinh sản. Họ sẽ cố tìm cách ngăn bạn.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đều chết.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này',
        body: 'Khi bạn đổ xúc xắc cho việc di chuyển của lũ Firebat trong lượt quái vật, đặt bấy nhiêu token Firebat mới vào phòng nơi lật haunt. Firebat không thể di chuyển trong lượt chúng xuất hiện.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Firebat không thể tấn công hay bị tấn công. Sau khi bạn di chuyển tất cả Firebat, đổ 1 xúc xắc cho mỗi Firebat chung phòng với một hoặc nhiều anh hùng; tất cả anh hùng trong phòng đó chịu sát thương vật chất bằng kết quả (lá Armor chỉ ngăn được 1 điểm). Firebat không làm chậm anh hùng đi qua phòng chúng.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Lũ dơi con của bạn háu ăn rỉa rói những con người vương vãi khắp dinh thự. Chẳng mấy chốc sẽ có thêm nhiều firebat tô điểm cho dinh thự bằng sự hiện diện rực cháy của chúng. Vòng tuần hoàn của sự sống... còn gì đẹp hơn?',
      },
    ],
    monsters: [{ name: 'Firebats', stats: 'Speed 3' }],
  },

  39: {
    id: 39,
    title: 'Người Thừa Kế',
    intro:
      'Cuối cùng họ đã đến — những người duy nhất có thể là người thừa kế gia sản cổ xưa của dòng họ Romanescu. Nếu người thừa kế đích thực ngồi lên ngai trong khi cầm nhẫn và giáo Romanescu, họ sẽ đoạt hết mọi thứ từ tay bạn. Không được để điều đó xảy ra. Đêm nay những sát thủ ẩn mình của bạn sẽ giết người thừa kế.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn trở thành kẻ phản bội.\nNếu Statuary Corridor chưa có trong ván, hãy tìm nó và đặt sao cho khó đến nhất có thể, rồi xáo lại.\nThiết lập thanh Lượt/Sát thương với kẹp ở mức 0.\nBạn có số Sát Thủ ẩn mình bằng số người chơi. Bí mật ghi ra các phòng của chúng: mỗi tên phải ở một phòng đang có trong ván, mỗi phòng một Sát Thủ, không bao giờ ở phòng có người hay ở Statuary Corridor.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Một trong số họ là người thừa kế, nhưng bạn không biết là ai.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Người thừa kế chết.',
      },
      {
        heading: 'Dùng Các Sát Thủ',
        body: 'Khi một anh hùng đi vào phòng có Sát Thủ, bạn có thể lộ diện nó và tấn công ngay lập tức (kể cả ngoài lượt): một đòn đánh lén đổ 2 xúc xắc sát thương vật chất mà anh hùng không thể phòng thủ. Sau khi tấn công một lần, Sát Thủ trúng độc và chết (gạch bỏ nó). Mỗi khi một anh hùng chết, bạn có thể hỏi xem họ có phải người thừa kế không — người chơi phải trả lời thành thật.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này',
        body: 'Cuối lượt của mình, nâng thanh (bắt đầu từ 1). Cuối Lượt 3, các Sát Thủ mới bằng số người chơi ban đầu xuất hiện (bí mật ghi ra phòng của chúng; phòng nào không có người và không có Sát Thủ). Cuối Lượt 6, đặt thêm theo cùng cách.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Người thừa kế đã chết; gia sản bị đánh cắp của gia tộc bạn an toàn. Bạn thả một chiếc vương miện giấy bên cạnh thi thể. Khi nó đỏ thẫm bởi máu của người thừa kế, bạn lặng lẽ khép cửa.',
      },
    ],
    monsters: [{ name: 'Assassins', stats: 'Might 2' }],
  },

  40: {
    id: 40,
    title: 'Chôn Sống',
    intro:
      'Spirit Board tự nó trượt qua các chữ cái, đánh vần BURIED ALIVE (CHÔN SỐNG) — phá vỡ bùa chú che giấu bí mật của bạn: nạn nhân bạn chôn sống ngay trước khi vào nhà. Nếu các bạn đồng hành tìm thấy nạn nhân của bạn, điều đó tuyệt đối không được phép xảy ra.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn trở thành kẻ phản bội.\nThiết lập thanh Lượt/Sát thương với kẹp ở mức 0.\nChọn một phòng tầng hầm đã được khám phá và bí mật ghi ra — người bị chôn ở đó. Nếu có ít hơn năm phòng tầng hầm (tính cả Basement Landing), hãy rút và đặt các phòng tầng hầm cho đến khi có năm phòng, rồi ghi ra phòng chôn người.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ đang cố cứu người bị chôn.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Người bị chôn chết.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này',
        body: 'Cuối lượt của mình, nâng thanh (bắt đầu từ 1), rồi đổ bấy nhiêu xúc xắc. Người bị chôn chịu chừng đó sát thương vật chất. Giữ tổng cộng dồn — người bị chôn chết sau 12 điểm.',
      },
      {
        heading: 'Spirit Board',
        body: 'Spirit Board giúp các anh hùng; nhà thám hiểm đang cầm nó không thể trao đổi hay thả nó. Nếu bạn đánh bại anh hùng đó với chênh 2+ bằng đòn Might, bạn có thể cướp Spirit Board thay vì gây sát thương — nó lập tức bị phá hủy và lá bị bỏ đi.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Các bạn đồng hành cuống cuồng của bạn chỉ chậm một chút thôi. Bằng cách nào đó cả màn này khiến bạn thấy đói. Đã đến giờ ăn tối muộn... kèm tráng miệng.',
      },
    ],
    monsters: [],
  },

  41: {
    id: 41,
    title: 'Kẻ Phản Bội Vô Hình',
    intro:
      'Bạn đọc một từ khắc ở mặt sau chiếc nhẫn. Đọc to lên, một cơn đau khủng khiếp xuyên qua mắt bạn. Rồi nó biến mất — cùng với lương tâm và cả thân xác bạn. Bạn vô hình: một thợ săn vô hình, sẵn sàng giết chóc.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn trở thành kẻ phản bội.\nLấy một tờ giấy. Chọn bất kỳ phòng nào hiện đang có trong nhà và ghi ra tên nó — đó là nơi bạn đang đứng. Sau đó gỡ quân của bạn ra khỏi nhà.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ đang cố tìm và giết bạn.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đều chết.',
      },
      {
        heading: 'Cách Di Chuyển',
        body: 'Thay vì di chuyển quân, hãy ghi ra phòng nơi bạn kết thúc di chuyển (dùng Speed và cách di chuyển thông thường của bạn). Rời khỏi phòng có anh hùng không tốn thêm một ô (khác với quái vật). Bạn vẫn có thể khám phá phòng, nhưng việc đặt tile sẽ làm lộ vị trí của bạn.',
      },
      {
        heading: 'Cướp Item',
        body: 'Mỗi lượt một lần bạn có thể đổ Speed để cướp một item từ một anh hùng trong phòng bạn (không phải đòn tấn công Speed; không phòng thủ). 4+ bạn lấy được item; 1–3 bạn thất bại (không cần nói nhắm ai); 0 bạn thất bại và phải nói đã nhắm anh hùng nào.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Chiếc Nhẫn không còn cho bạn thực hiện đòn tấn công Sanity nữa. Trừ khi tấn công bằng item, tất cả đòn tấn công của bạn đều là đánh lén: đổ số xúc xắc bằng nửa số anh hùng ban đầu (làm tròn lên); anh hùng chịu chừng đó sát thương vật chất mà không được phòng thủ. Nếu một anh hùng đoán đúng phòng bạn và tấn công, hãy xử lý bình thường. Bạn có thể vừa cướp vừa tấn công trong cùng một lượt.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Bạn bè bạn nằm vương vãi khắp dinh thự. Bạn lau máu khỏi mặt và một lần nữa tan biến khỏi tầm mắt. Vui thật. Có lẽ lần tới bạn sẽ thử phóng hỏa.',
      },
    ],
    monsters: [],
  },

  42: {
    id: 42,
    title: 'Anh Hùng Đến',
    intro:
      'Sự bất tử đến thật rẻ: chỉ cần mở một cánh cổng nhỏ xuống Địa Ngục, và chủ nhân của bạn sẽ cho bạn giữ món quà này mãi mãi. Dù bất tử, thời gian vẫn cứ trôi. Tốt nhất đừng chờ quá lâu trước khi mở cánh cổng kinh hoàng ấy.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn trở thành kẻ phản bội.\nNâng mọi chỉ số dưới mức khởi đầu về mức khởi đầu.\nNếu bạn không có lá vũ khí (Revolver, Axe, Blood Dagger, v.v.), lục chồng item hoặc omen, lấy vũ khí đầu tiên, rồi xáo lại.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ đang cố ngăn bạn mở cánh cổng xuống Địa Ngục.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn mở được cánh cổng xuống Địa Ngục.',
      },
      {
        heading: 'Cách Mở Cổng Xuống Địa Ngục',
        body: '1. Hiến tế (giết) một anh hùng bằng vũ khí, rồi mang xác tới Catacombs, Chasm, hoặc Pentagram Chamber (nhặt như item; mỗi phòng đi vào tốn 2 ô khi đang mang xác; Dog không thể mang xác).\n2. Khi xác đã ở một trong các phòng đó, đổ Sanity hoặc Knowledge 4+ để mở cổng (mỗi lượt một lần).',
      },
      {
        heading: 'Đối Phó Với Sự Bất Tử',
        body: 'Các chỉ số của bạn không tăng hay giảm (kể cả khi được/mất item) trừ khi các anh hùng tìm ra cách đặc biệt để hạ chúng. Không thể cướp item từ bạn. Nhà thám hiểm không làm chậm di chuyển của bạn.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Bạn không thể bị tấn công và không chịu sát thương từ hiệu ứng lá hay phòng. Bạn tấn công bình thường nhưng không chịu sát thương nếu bị đánh bại.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Khi cánh cổng xé toạc căn nhà mở vào thế giới của bạn, bạn nghe tiếng gào thét của những kẻ bị đày hòa lẫn tiếng kêu của những kẻ sắp bị đày. Và bạn miễn nhiễm với tất cả. Cứ tận hưởng đi.',
      },
    ],
    monsters: [],
  },

  43: {
    id: 43,
    title: 'Bệnh Tinh Tú',
    intro:
      'Haunt này dùng luật kẻ phản bội ẩn được mô tả ở trang 17 của sách luật.',
    sections: [
      {
        heading: 'Nơi Tìm Luật',
        body: 'Tất cả người chơi đọc haunt này trong cuốn Secrets of Survival.',
      },
    ],
    monsters: [],
  },

  44: {
    id: 44,
    title: 'Cái Chết Tìm Đến Tất Cả',
    intro:
      'Căn nhà là một sinh vật sống, và như mọi sinh vật sống nó phải ăn. Từ lâu bạn đã ký một giao kèo: cứ mười năm bạn mang người mới đến, căn nhà làm họ già đi thành cát bụi, và bạn được thêm mười năm tuổi trẻ. Những cơn rung chuyển đã bắt đầu.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn trở thành kẻ phản bội.\nTất cả anh hùng lập tức già đi 10 tuổi (kể cả nhà thám hiểm đang cầm Medallion) — tra bảng và bảo mỗi anh hùng cách điều chỉnh chỉ số của họ.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ đang già đi nhanh chóng, nhưng họ đã tìm thấy một Medallion ngăn được quá trình đó.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đều chết.',
      },
      {
        heading: 'Cuối Lượt Của Bạn',
        body: 'Mỗi anh hùng đổ 1 xúc xắc và già đi bấy nhiêu thập kỷ (kể cả khi bạn đã chết). Mỗi thập kỷ mới (cộng dồn): tuổi 20 cộng 1 Might & 1 Speed; tuổi 30 cộng 1 Sanity & 1 Knowledge; tuổi 40 mất 1 Speed, cộng 1 Sanity; tuổi 50 mất 1 vật chất & 1 tinh thần; tuổi 60 mất 1 Might, 1 Speed & 1 tinh thần; tuổi 70 trở lên mất 1 ở mỗi chỉ số trong cả bốn chỉ số.',
      },
      {
        heading: 'Hút Lấy Cái Chết',
        body: 'Mỗi khi một anh hùng chết vì bất kỳ lý do gì, lập tức đổ 3 xúc xắc và cộng kết quả vào bất kỳ chỉ số nào hoặc bất kỳ tổ hợp chỉ số nào.',
      },
      {
        heading: 'Medallion',
        body: 'Bạn không thể nhặt, cướp hay mang Medallion.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Cát bụi trở về cát bụi — à, gần như tất cả. Bạn thấy hoàn toàn khỏe khoắn. Rời khỏi nhà, bạn khép cửa và nói lời tạm biệt, cho đến thập kỷ sau.',
      },
    ],
    monsters: [],
  },

  45: {
    id: 45,
    title: 'Tích, Tích, Tích',
    intro:
      'Bạn cười khúc khích khi ngắm tác phẩm của mình: một quả bom buộc vào mỗi nhà thám hiểm. Giờ chúng không thể không kính nể và phục vụ bạn.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn trở thành kẻ phản bội.\nNếu bạn không có lá Dynamite, lấy nó từ người đang giữ hoặc lục chồng item để tìm, rồi xáo lại.\nThiết lập thanh Lượt/Sát thương với kẹp ở mức 0.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Bạn đã buộc một quả bom hẹn giờ vào mỗi người; họ đang cố tháo gỡ bom.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Hoặc tất cả anh hùng đều chết, hoặc bạn hoàn thành Quả Bom Lớn.',
      },
      {
        heading: 'Quả Bom Lớn',
        body: 'Bạn hoàn thành Quả Bom Lớn vào Lượt 12; rồi nó nổ và tất cả mọi người đều chết.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này',
        body: 'Cuối lượt của mình, nâng thanh (bắt đầu từ 1), cộng số đó vào số anh hùng còn sống, và đổ bấy nhiêu xúc xắc (tối đa 8). Nếu ra 8+, anh hùng còn sống gần nhất về phía bên trái bạn còn mang bom đang hoạt động sẽ nổ — chết cùng với mọi anh hùng khác trong phòng; item/omen của họ bị phá hủy.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Bạn không thể di chuyển — bạn ở yên trong phòng khởi đầu. Sau lượt đầu tiên của bạn, bất kỳ nhà thám hiểm còn mang bom nào đi vào phòng bạn hoặc phòng kề bên (không cần cửa) sẽ lập tức nổ cùng tất cả anh hùng ở đó (bạn không bị ảnh hưởng). Anh hùng đã được vô hiệu hóa bom không thể nổ vì cú đổ của bạn hay vì ở gần. Bạn có thể dùng Dynamite trong phòng của chính mình (bạn không bị ảnh hưởng).',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Quả bom thật đẹp — một tác phẩm nghệ thuật đích thực, kết tinh của mọi kỹ năng và khát vọng điên cuồng của bạn. Đã đến lúc cho cả thế giới thấy vinh quang của nó!',
      },
    ],
    monsters: [],
  },

  46: {
    id: 46,
    title: 'Bữa Tiệc',
    intro:
      'Bạn ngửi thấy mùi một bữa tiệc thịnh soạn. Những phần thân thể người dẫn tới một cái đầu bị chặt nằm trên đĩa bạc — bạn bè bạn đã chuẩn bị món ăn yêu thích của bạn. Bạn là một kẻ ăn thịt người văn minh, và lũ quái dị đã sẵn sàng giúp chuẩn bị món tiếp theo: những nạn nhân bạn mang đến đây.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn trở thành kẻ phản bội.\nNếu Dining Room không có trong nhà, hãy tìm nó và đặt ở tầng trệt, rồi xáo lại.\nĐặt các token quái vật nhỏ màu tím (Cannibal Freaks) vào Dining Room với số lượng bằng số anh hùng.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Những nạn nhân bị lũ Freaks bắt giữ đã trốn thoát khỏi Attic; các anh hùng sẽ cố cứu họ.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Hoặc tất cả Nạn Nhân đều bị ăn thịt, hoặc tất cả anh hùng đều chết. Nếu dù chỉ một Nạn Nhân thoát ra qua cửa trước, bạn chỉ có thể thắng bằng cách giết tất cả anh hùng.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Một Cannibal Freak bị đánh bại sẽ chết (không phải bị choáng). Nạn Nhân không thể tấn công; nếu bạn hoặc một Freak đánh bại một Nạn Nhân, nó chết và kẻ tấn công có thể ăn tiệc (Nạn Nhân không gây sát thương nếu thắng). Bạn và lũ Freaks không làm chậm Nạn Nhân và ngược lại.',
      },
      {
        heading: 'Ăn Tiệc',
        body: 'Một Nạn Nhân bị giết trở thành một Xác Chết (lật token nó lại); một anh hùng bị giết thì lật ngã quân ra. Nếu bạn hoặc một Freak chung phòng với một Xác Chết/anh hùng đã chết vào đầu lượt của bạn và không có anh hùng sống nào ở đó, bạn có thể ăn tiệc. Dành trọn một lượt để ăn tiệc (không hành động gì khác) sẽ cộng 1 vào mỗi chỉ số của bạn (lũ Freaks cũng vậy). Khi đã ăn xong, gỡ thi thể ra.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Bạn nâng đầu nạn nhân lên và xướng: "Qua máu thịt xương cốt, ta đã trở thành không còn máu thịt xương cốt!" Sự bất tử rót đầy chiếc bình rỗng là thân xác bạn, và lũ quái dị ăn thịt người cúi rạp thờ phụng bạn.',
      },
    ],
    monsters: [{ name: 'Cannibal Freaks', stats: 'Speed 2 · Might 4 · Sanity 4' }],
  },

  47: {
    id: 47,
    title: 'Con Sâu Ouroboros',
    intro:
      'Thân xác bạn giãn dài ra; hộp sọ bạn tách làm đôi và thân mình biến thành một con rắn dài. Bạn cảm thấy mình to lớn, và bạn cần lớn hơn nữa — một nhu cầu mạnh đến mức bạn có thể nghiền nát cả thế giới. Có lẽ bạn sẽ bắt đầu bằng việc nghiền nát căn nhà này.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Gỡ quân của bạn ra — giờ bạn là con Worm Ouroboros hai đầu.\nThả tất cả item ở phòng nơi lật haunt. Nếu bạn đang giữ Girl, Dog, hay Madman, bạn nuốt chửng họ (bỏ lá).\nĐặt hai token Ouroboros Head lớn hình tròn vào phòng nơi lật haunt.\nĐể riêng 16 token quái vật nhỏ màu xanh lá (Ouroboros Body).',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ đang cố giết bạn.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn đặt được cả 16 token Ouroboros Body vào trong nhà — khi đó bạn đủ lớn để phá hủy nó và trốn thoát.\nMỗi lượt, đổ riêng cho việc di chuyển của mỗi Đầu. Đặt một token Body vào mỗi phòng mà một Đầu vừa rời đi (nếu chưa có ở đó; mỗi phòng một token). Các Đầu có thể đi qua phòng có Body (không đặt token mới) nhưng không qua Secret Stairs/Passage hay Mystic Elevator. Các Đầu có thể khám phá phòng (bỏ qua biểu tượng; biểu tượng không kết thúc di chuyển).',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Khi các anh hùng hoàn thành một nghi lễ đặc biệt, họ có thể tấn công các Đầu. Mỗi Đầu phải bị đánh trúng số lần bằng nửa số người chơi (làm tròn lên) mới bị tiêu diệt. Chỉ các Đầu tấn công, nhưng cả token Đầu lẫn Body đều làm chậm anh hùng (anh hùng không làm chậm các Đầu). Các Đầu không thể bị choáng và không bị ảnh hưởng bởi đòn tấn công Speed.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Bạn đã quấn quanh căn nhà, những vòng cuộn của bạn nghiền nát rui kèo. Bạn lớn dần và mạnh hơn. Chẳng mấy chốc bạn sẽ quấn quanh thế giới — và sau khi thế giới là của bạn, hẳn nhiên các vì sao sẽ tiếp nối.',
      },
    ],
    monsters: [{ name: 'Ouroboros Head', stats: 'Speed 1 · Might 6' }],
  },

  48: {
    id: 48,
    title: 'Chất Đống Như Củi',
    intro:
      'Bạn kể cho các bạn đồng hành về những cái chết rùng rợn ở đây năm năm trước — một gã điên không thể bị giết, thân xác nát bươm của hắn luôn quay lại. Có lý do để bạn biết nhiều đến thế: gã điên đó là một người họ hàng xa. Hắn đang quay lại, và hắn sẽ cần nạn nhân.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn trở thành kẻ phản bội.\nĐặt token Crimson Jack lớn hình tròn vào Entrance Hall, ngay cạnh cửa trước.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ đang tìm một vũ khí có khả năng giết Crimson Jack.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đều chết.\nNếu Crimson Jack bị đánh bại, hắn bị gỡ ra tạm thời thay vì bị choáng hay chịu sát thương; vào đầu lượt kế tiếp của bạn hắn quay lại Entrance Hall. Mỗi lần quay lại, cộng 1 vào mỗi chỉ số của hắn.\nCrimson Jack tỏa ra một bầu hào quang sợ hãi: vào đầu lượt mỗi anh hùng, anh hùng ở trong phòng hắn phải đổ Sanity 3+ nếu không sẽ mất 1 điểm tinh thần và 1 điểm vật chất.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Thân hình đồ sộ của Crimson Jack lừng lững phía trên thi thể bạn của bạn, gương mặt tái nhợt của hắn cố định trong nụ cười không bao giờ tắt. Nhưng bạn đã thấy chán. Bạn chắc chắn mình vừa thấy một nhà huynh đệ đoàn ngay dưới con đường...',
      },
    ],
    monsters: [{ name: 'Crimson Jack', stats: 'Speed 3 · Might 3 · Sanity 3' }],
  },

  49: {
    id: 49,
    title: 'Bạn Mặc Nó Hợp Lắm',
    intro:
      'Khi bạn năm tuổi, bạn thấy một hồn ma trong phòng ngủ của Mẹ đang chuẩn bị đoạt linh hồn bà. Bạn van xin nó đừng làm — đổi lấy một cái giá. Hôm nay bạn đã mang bạn bè tới đây để trả cái giá đó bằng linh hồn của họ.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn trở thành kẻ phản bội.\nĐặt một token quái vật nhỏ màu tím (Astral Spirit) vào phòng bạn.\nĐể riêng các token Sanity Roll hình tam giác với số lượng bằng số người chơi.\nAstral Spirit đã ép Linh Hồn của các anh hùng ra khỏi thân xác họ; thân xác họ giờ bất tỉnh.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ đang cố tiêu diệt Astral Spirit để có thể trở lại thân xác mình.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Hoặc tất cả Linh Hồn của các anh hùng đều bị tiêu diệt, hoặc Astral Spirit chiếm ngụ thân xác của một anh hùng đã mất linh hồn.',
      },
      {
        heading: 'Cách Spirit Chiếm Ngụ Một Thân Xác',
        body: 'Khi Linh Hồn của một anh hùng bị tiêu diệt, Astral Spirit có thể làm nghi lễ vào thân xác đó. Mỗi lượt một lần, nó có thể đổ Sanity đối đầu với một thân xác trong phòng nó, cần kết quả cao hơn Sanity khởi đầu của nhà thám hiểm đó; mỗi lần thành công đặt một token Sanity Roll cạnh thân xác. Khi một thân xác có số token bằng số người chơi, Spirit chiếm ngụ nó và bạn thắng. Spirit có thể đi xuyên tường (không xuyên sàn/trần) và không bị choáng nếu bị đánh bại.',
      },
      {
        heading: 'Đánh Bại Linh Hồn Của Nhà Thám Hiểm',
        body: 'Astral Spirit không thể tấn công một thân xác vật chất, chỉ có thể tấn công Linh Hồn, và chỉ bằng Sanity hoặc Knowledge. Bạn có thể tấn công thân xác bất tỉnh của một anh hùng (không phòng thủ): đổ 2 xúc xắc sát thương tinh thần. Hạ Knowledge hoặc Sanity của một anh hùng xuống biểu tượng đầu lâu (ngưỡng tử) theo cách này sẽ tiêu diệt Linh Hồn của họ, nhưng Spirit không thể chiếm ngụ thân xác đó.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Thân xác của một người bạn loạng choạng đứng dậy, thở hổn hển. Mọi thứ đã khác. Người bạn của bạn thì thầm: "Aaaa... đã lâu lắm rồi ta mới được khoác lên mình một lớp áo da thịt." "Bạn mặc nó hợp lắm," bạn nói. Và hồn ma quả thật như vậy.',
      },
    ],
    monsters: [{ name: 'Astral Spirit', stats: 'Speed 3 · Sanity 6 · Knowledge 6' }],
  },

  50: {
    id: 50,
    title: 'Săn Kho Báu',
    intro:
      'Haunt này không có kẻ phản bội — chỉ có anh hùng. Tất cả anh hùng đua nhau tìm kho báu được giấu kín.',
    sections: [
      {
        heading: 'Nơi Tìm Luật',
        body: 'Phần luật còn lại của haunt này nằm trong cuốn Secrets of Survival.',
      },
    ],
    monsters: [],
  },

  51: {
    id: 51,
    title: 'Bản Dựng Của Đạo Diễn',
    intro:
      '"Cắt! Cắt! Cắt! Vì Kubrick, các người là những diễn viên TỆ NHẤT! Sáng mai cùng lắm chỉ một người trong các người còn được làm phim này — và tôi không quan tâm là ai!" Nếu chỉ một diễn viên được đóng chính trong đống phim nhựa bốc khói này, thì đó phải là bạn.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Các nhà thám hiểm của bạn vẫn còn trong ván nhưng đã trở thành kẻ phản bội. Mỗi nhà thám hiểm bỏ tất cả lá item vũ khí và lá omen vũ khí rồi rút số lá item không phải vũ khí tương đương.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Anh hùng là Đạo Diễn của bộ phim The Haunting of Hell Hotel. Các bạn là những diễn viên lận đận, và mỗi người phải giết tất cả các diễn viên còn lại. Những vũ khí bạn thu thập chỉ là đạo cụ vô dụng. Đạo Diễn giữ một lá omen che giấu Vision (một lá event úp xuống) — lấy được nó có thể gây ấn tượng với Đạo Diễn và giữ được việc cho bạn. Production Assistant của Đạo Diễn cũng là đối thủ; nếu bạn tấn công Đạo Diễn, một Production Assistant sẽ chen vào, phòng thủ bằng Knowledge.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Một trong các bạn giữ Vision của Đạo Diễn trong Theater mà không có diễn viên nào khác hiện diện; Đạo Diễn khi đó đưa ra chỉ dẫn có thể cho bạn thắng. Tất cả những người còn lại đều thua. Nếu bạn giết Đạo Diễn, bạn thua.',
      },
      {
        heading: 'Luật Vật Phẩm Và Điềm Báo Đặc Biệt',
        body: 'Nếu bạn rút một vũ khí từ chồng item hoặc omen, bỏ nó đi và rút một lá khác từ chính chồng đó.',
      },
      {
        heading: 'Cách Token Vật Phẩm Hoạt Động',
        body: 'Các Đạo Cụ (token item hình ngũ giác) nằm ở một số phòng. Khi vào phòng có một Đạo Cụ, nhìn số của nó và giữ úp mặt số xuống (tối đa một cái một lúc; nếu bạn lấy cái thứ hai, nhìn cả hai, giữ một, để lại cái kia). Lộ số của một Đạo Cụ cho các nhà thám hiểm khác khi bạn dùng nó.',
      },
      {
        heading: 'Vật Phẩm Token (1–10)',
        body: '1 Powerless Chainsaw: 2 xúc xắc vật chất vào một nhà thám hiểm khác, 1 xúc xắc vào chính bạn, rồi kết thúc lượt. 2 Sawed-Off Shotgun: đòn tấn công Speed; ai thắng thì gây sát thương bằng chênh lệch. 3 Flash Powder: đòn tấn công Knowledge (không sát thương); khi thắng, mục tiêu thả tất cả token item và lá item, bạn nhặt một cái lên. 4 Fog Machine: đòn tấn công Knowledge (không sát thương); khi thắng, di chuyển sang phòng kề bên và thả token Smoke ở đó (rời đi cần Sanity 5+). 5 Hook for a Hand: đòn tấn công Might, +1 xúc xắc, và thả một lá item, token item, hoặc omen. 6 Plastic Skeleton: đòn tấn công Might nhắm một nhà thám hiểm ở phòng kề bên; vào lượt kế tiếp của họ, họ cần Speed 5+ để rời phòng. 7 Screechy Violin: 2 xúc xắc Sanity vào một nhà thám hiểm khác, 1 xúc xắc vào chính bạn. 8 Clapperboard: rút một lá event, rồi giữ nó hoặc đưa đi (mỗi lượt một lần). 9 Dove-Summoning Capguns: đòn tấn công Speed (không sát thương); khi thắng, di chuyển mục tiêu tới một phòng đã khám phá cách xa tối đa ba phòng. 10 The Plan: nếu ở trong phòng của Đạo Diễn, lấy lá omen đã khởi đầu haunt và lá úp xuống bên dưới nó (không nhìn).',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Thực hiện đòn tấn công Knowledge nhắm một Production Assistant trong phòng bạn. Bạn không thể tấn công Đạo Diễn khi có một Production Assistant trong phòng bạn. Làm choáng một Assistant → gửi nó tới bất kỳ phòng nào trên tầng của bạn không có nhà thám hiểm; nếu bạn thua, Đạo Diễn có thể di chuyển quân của bạn theo cùng cách. Nếu một đòn tấn công gây 2+ sát thương cho một diễn viên hoặc Đạo Diễn đang giữ một token item hoặc lá omen Vision, hãy lấy nó thay vì gây sát thương (thả bất kỳ token item nào bạn đang có; không nhìn lá event).',
      },
    ],
    monsters: [],
  },
};
