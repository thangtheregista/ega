import React from 'react';

const StorySection = () => {
    return (
        <section style={styles.section}>
            <div style={styles.container}>
                <div style={styles.body}>
                    <a href="/gioi-thieu" style={styles.imageWrapper}>
                        <img
                            src="//bizweb.dktcdn.net/100/491/756/themes/956460/assets/imgtext_2_img.jpg?1746582633520"
                            alt="Một chút câu chuyện"
                            style={styles.image}
                            loading="lazy"
                        />
                    </a>

                    <div style={styles.contentWrap}>
                        <div style={styles.content}>
                            <h3 style={styles.title}>Một chút câu chuyện</h3>
                            <p style={styles.desc}>
                                Với ước mơ tạo ra thứ gì đó đặc biệt, EGA Furniture đã thành lập vào năm 2010. Tầm nhìn
                                không chỉ là tạo ra những sản phẩm mang lại niềm vui cho thế giới những người yêu thích
                                thiết kế nội thất mà họ còn muốn tạo ra một nền văn hóa công ty nơi nhân viên cảm thấy
                                thoải mái. Vì vậy, từ khóa hạnh phúc đã ăn sâu vào DNA thương hiệu của chúng tôi.
                            </p>
                            <p style={styles.desc}>
                                <b>
                                    <i>
                                        Hạnh phúc là ở xung quanh bạn những người tốt và những sản phẩm mang lại niềm
                                        vui.
                                    </i>
                                </b>
                            </p>
                            <a href="/gioi-thieu" className="story-link">
                                Xem chi tiết
                                <svg
                                    className="story-icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
               .story-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: "SVN-Gilroy", sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #000;
    text-decoration: underline;
    transition: color 0.3s ease;
}

.story-link:hover {
    color: #f97b22;
}

.story-icon {
    transition: transform 0.3s ease;
}

.story-link:hover .story-icon {
    transform: translateX(4px);
}   
            `}</style>
        </section>
    );
};

const styles = {
    section: {
        padding: '60px 0',
        fontFamily: '"SVN-Gilroy", sans-serif',
        backgroundColor: '#fff',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 16px',
    },
    body: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '60px',
    },
    imageWrapper: {
        flex: '0 0 auto',
        maxWidth: '544px',
        width: '100%',
    },
    image: {
        width: '100%',
        height: 'auto',
        display: 'block',
    },
    contentWrap: {
        flex: '1',
        minWidth: '280px',
    },
    content: {
        maxWidth: '500px',
    },
    title: {
        fontSize: '28px',
        fontWeight: '700',
        marginBottom: '20px',
        textAlign: 'left',
        color: '#000',
    },
    desc: {
        fontSize: '16px',
        lineHeight: '1.8',
        marginBottom: '15px',
        color: '#333',
    },
};

export default StorySection;
