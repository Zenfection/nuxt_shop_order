interface Slider {
    icon: string,
    title: string,
    description: string
}

class Contents {
    sliders: Array<Slider> =   [
        {
            icon: "fa-duotone fa-rabbit-running fa-3x",
            title: "Tốc độ ưu việt",
            description: `Không cần <span class='fw-semibold text-dark'>refresh</span> lại trang khi sử dụng`
        },
        {
            icon: "fa-duotone fa-users-viewfinder fa-3x",
            title: "Sử dụng đơn giản",
            description: `Thiết kế UI/UX <span class="fw-semibold text-dark">
                    đơn giản, trực quan</span>`
        },
        {
            icon: "fa-duotone fa-binary-lock fa-3x",
            title: "Mã hóa mật khẩu",
            description: `Mã hoá<span class="fw-semibold text-dark">
                    SHA516</span> cho toàn dữ liệu database`
        },
        {
            icon: "fa-duotone fa-fork-knife fa-3x",
            title: "Hàng hóa đa dạng",
            description: `Mua bán nhiều sản phẩm và <span class="fw-semibold text-dark">đặt hàng</span>`
        },
        {
            icon: "fa-duotone fa-filters fa-3x",
            title: "Bộ lọc thông minh",
            description: `Bộ lọc sản phẩm do chính <span class="fw-semibold text-dark"> Zen</span> phát triển`,
        },
        {
            icon: "fa-duotone fa-box-circle-check fa-3x",
            title: "Xem lại đơn hàng",
            description: `Theo dõi <span class="fw-semibold text-dark"> đơn
                    hàng</span> cá nhân vừa
                    đặt dễ dàng`
        },
        {
            icon: "fa-duotone fa-basket-shopping fa-3x",
            title: "Giỏ hàng thông minh",
            description: `<span class="fw-semibold text-dark">Thêm, sửa,
                    xóa</span> sản phẩm với nhanh chóng`
        },
        {
            icon: "fa-duotone fa-eye-low-vision fa-3x",
            title: "Không lấy dữ diệu",
            description: `Cam kết không lấy <span class="fw-semibold text-dark">
                    dữ liệu</span>
                    của người dùng`
        }
    ]
}

export const contents = new Contents();