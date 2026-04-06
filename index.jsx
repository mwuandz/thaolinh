import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Camera, Film, Heart, Home, Mail, MapPin, Menu, Music, Sparkles, User, X } from "lucide-react";

export default function PortfolioPage() {
  const [activePage, setActivePage] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const profileImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAADhCAIAAABp1HRLAAEAAElEQVR4nLz92a80WZInhtlyjm8Rce+3ZGZl1tpdS/csGqLF1nBGSEiA0YMN6TQExhMwpOn/pP8F6vQn6P8Amgz4AMZDCJgAARYSEqRoiRa7anur1W7V3VXVVdWVWZV7Muf44RizX+4REXfP3f2Q44vILMysrKqujIiMzIzMjHPO2Wef4x7mb37n9/5n8Fe/+tV3v/vdV77ylf9N//F/7Iorrvj4xz/+9re//ad/+qeVSuWpT33qhS98YbVa/a//+q+vf/3rb7755sMPP/zoo4+Wl5eLxWLj8bjdbj/2sY+9/PLL58+f/8M//MOf/umfLly48LGPfWxtbe3tt9/+0Y9+tLa2NlZWVg4fPvzCCy/86q/+6qGHHvr85z9vMBj+c3/nt4KBQOfz+bvf/e7u7u5vf/vb+vr6z33uc6urq6PRaLlcXl5e/pM/+ZPf/e53FxcXr7766qOPPvof/+N/LJfLk5OT5XL50ksvfeCBB6rVan19/fTp0//4H/+j3d3d69evv//97w8Gg8lk8sILL5TL5R/8wR88+eSTP/rRjw4PD3/rW9+SJGlvb++ZZ57p6+vr6+s7efLkzs7Opz71qbe//e3hcPjwww/Pzc21Wq2tVutDH/rQb37zm0ql8txzzx09evTOO+9cvHjxRz/60Y9+9KPbtm07efLkt7/97Xa7XRCEc+fOnT9//u677/7yl7986qmnvvWtbz377LONRuOVV1659dZbf+M3fuOVV17RdX1/f39+fv6Tn/xkaWlpd3f3v/7rv9rq6mqv1/vYxz72xje+8Y1vfOPpp5++ePHiP//zP+12u7u7u3v22WfZbPbpp5/etGnT9evXf+QjH3n22Wc/+MEP0jTN5XL19fVhGJbL5cWLF3/605/euHFjMBiMj4/f+c53Xn311S984QvxeHz16tWdnZ0f//jH3/nOd1ZXV6dPn77yyitBEI6Ojm7btu27v/u7t956a6/XW1tb+8d//MfxePzpp59+/etfX758+eqrr46Ojv7VX/1V1Wr12GOPDQaDP//zP4+Pj2/cuPH3f//3/X5/MBj80z/90+uvv/7xxx+Xy+VVq1YB6N+/f+vWrQcPHtx8882jo6P1ev3ll1/etm1bEATvfe97n/vc5z744IPxePzAgQPvv//+wYMHv/71r8fHxw8ePPjLX/5yZ2dnwzA8/vjj4+Pjp5566sMPP7xw4cAvfvGLV1999TOf+cxKpTI/P39/f/9P//RP4+Pjt956q7e39+9+97vvfve7t95668knn3zttde++MUvPvjgg7feemu3261Wq6WlpU2bNr355puf/OQn7Xa7V1999eTJkydOnLjrrrt+/vOfP/fcc0uXLl25cuXhhx8+efLk6upqvV7/4Ac/OP/885cvX75mzZpDhw797d/+7Y9//OO1a9e2b9/+0Y9+9MY3vvHtb3978+bN3/u939u1a9ePf/zj06dP/+N//I//7//9v7/61a86nY6zZ8/+8R//sW3btn/0R39UKBSuv/76crn8s5/97Mtf/vLe3t7PfvazvV7vqaee2r59+49+9KNms3nvvff+/M//fHx8/NJLL+3du/eNN95I0zT1ev2Tn/zkW9/61q9+9atf/epXFy9efPOb39y7d+/jH//4wYMHv/3tb7/97W8PBgN/8Rd/8aEPfWjVqlVNTU2PPvroa6+99p73vOfQoUPXrl377Gc/+8gjj+RyuVgs/vCHP5TL5Ysvvnjvvffevn37s5/97A9/+MPTTz/9k5/85P79+4eHh1988cVHH3107dq1V1555Y033mA2m7/2a7+2u7v76KOPLi4uvvDCC1/4whe6urqWlpY+85nPnDhx4s9+9rNCoTA5Oflnf/Znzz333JUrV37gAx/44Ac/+Md//Md2u33t2rWXXnrp8ssvv/XWW0EQ7r333muvvfbjH//4hS984amnnpqenr7yyit33nnnT3/607t27frrX/96yZIlqVQqP/zhD6+99trTTz99wYIF11133UMPPfTCCy8cPnx4a2urVqtVKBQf+9jHfve73z377LPVavW1117b2tr67W9/+8Mf/nBgYODmm28uLy+fPn36x3/8x2q1euutt1599dXzzz9/0aJFGzdunDx58o033jh16tTc3Nz555//l3/5l1QqFf/+3/978+bNu+66a2Zm5q//+q9///d/Pzw8fOqpp/7iL/7i7NmzP/3pT7/73e/abDbvvffe2NjYj370o4svvnjJkiVXX331/fffPzo6evvtt9fX11988cVbb7115MiRD37wgz/60Y+Gh4f/4R/+4d69e8Vi8YMPPvjQQw9df/31r3zlK/fcc0+1Wr399ttvfetbP/rRj4aGhp566ql3vvOd8+fPf+1rX/viF7/41FNPffazn33ppZcGBwfz8/Mf/vCHV69evfbaa3/2Z3928+bN2dlZfX39v/7rv/L5/Lvf/e6gUIjFYvfff/+dd97p6OiYm5v7+te//sUvfnHt2rU//dM/3b17d0VFRaFQuPPOO/v7+5cvX/7Qhz70hz/8YadTud1uf/azn11dXf3ud7+7YMGCffv23XvvvZ/97Gfv3Llz+fLla9eu/fCHP9zf3/+nP/1pKpUaGxvbvn37ww8/fPjw4ebm5rVr15YvX/7mN7/5rW99a2pq6vnnn5+ZmXn11Vf79u377d/+7blz57Zv37733nuHh4f/6Z/+6cKFC/fcc8/Vq1d//vOfHz16dMOGDVu3bv3yl798+umnzz77bG9v78knn3zggQd+8YtfHDx4cOnSpddee+2DH/zg7t27W61WLpfr6uoqFAr33HPPm2+++a9//eu3b99+/vOfv+666/7kT/6k0+n8zd/8zU9+8pPvfOc7V1999c9+9rP/+I//qNls1q5d++Mf//jMmTOf/exnt27d+qUvfeljH/vY4uLiV77ylauvr7/++utve9vbxo0bN2/ePP7442+++eY3vvGN9fX1N99882tf+9rS0tL+/v7PfOYzCxcu7O3tPXny5Ctf+crCwkIikVi6dOn1119fWVm5YMGCe+65p7u7u1Kp/MEPfvBzn/vcf//v//2JJ57Ys2fPf/7nf3711VdPnDjxL//yL5///OdPPfXU3/3d3+3atSufz0+n0/v27XvyySf/8A//8M1vfnP9+vWbNm368Ic/PD09/Vd/9Vd+8pOf7O/vv/7668eOHVuyZMn69evf/e53u7u7QRAeeOCB733ve7/97W/v27fve9/73vXXX/9v//Zv//qv//qjH/3olVde+YM/+IMbN27s27fvl7/85d/5nd85ODj46quv3nPPPW+88cann376V3/1V//8z/98z549H/vYxw4fPvzrX/96+PDh48eP//a3v33vvff+9V//9d13393d3f3Wt7514MCBf/7nfz59+vSzzz67d+/eN7/5zWaz+eijjz7yyCNr1qz5xS9+sbi4uH379h/84AfffPPNQCCQmZl55JFHvvrVr77xjW/8+Mc/3r17d7VafeADH/ja1772l3/5l1euXFlaWnr77bc/+MEPvvWtb7179+7+/v7Lly+fOXPm0KFDZrP5D//wD4VC4e///u8fffTRyZMnv/71r7/2ta+9+uqrN27c6Pf7J0+e/N3f/d3KlSuvvPLKyZMnf/e73z148OCvfvWr3/3ud4VCYfPmzTt37pw/f/7iiy/euHHj+vXrTzzxxIYNG5555pnPfOYzv/Vbv/V7v/d7R48evf3228cdd9whQ4aampp79+69ZMmSkydPnj17djgc/uCHPzQ0NLS0tPz0pz99+vTpxx9//N3f/d3nP/95u92+detWbW3tW9/61q5du6ZSqT/7sz/75Cc/qaqq6urq6tWrV4+Ojm7evPmUU06pqKh49dVX3/jGNxYWFv7Zn/2Z1Wr19NNPL1y48Pf//u+/+MUvVqtVP/zhD9vb2z/84Q8vvfTSa6+99sQTTzQajYcOHfL7/T179vzABz6waNEiH/vYxw4fPnzvvff+8Ic/3LRpU5ZlX/nKVx577LH9/f1/+7d/27Fjx7PPPnvXXXd95zvfef3117/0pS+9/vrrhUIhTdMvfvGL3/nOd3bv3n3HHXf8wR/8QalU+v73v3/58uUjR44cffTR/f39v/u7v3vrrbcWFhaeeeaZxYsXv/nNb37wgx8cHBw0Go2ZmZnNmze/9KUv/eQnP+ns7PyjP/qj06dP/9Zv/VY2m33ggQeef/75D3/4w4GBgQ996EOPPfbYQw89dMstt3zsYx87d+7c3//939fX1x966KGVK1d+4xvf2L59+7XXXuv1evX19dOnT6+tra2srGQyme9973uzs7OHh4fZbPbee+/93d/93R07dvzABz4A4M///M9vv/32tWvXzpw5s2vXrr/5m7+5bdu2T37yk3/2Z39WqVQeeOCBz372s0ql8gMf+MCDDz74jW9847HHHqvVaq+88so3v/nNpUuX/vM//3O/3/+rv/qrf/u3f7uwsHDlypUHHnigWq2+9dZbTz311Lvvvnv+/Pm77rpr3759zzzzzMMPP3z11Ve/+c1v5nK5/v7+5cuX77vvvs9//vNXX311MBhcv379d77znQceeOBnP/vZ7t27f/d3f/fMM89cuXKlrq7uJz/5yYkTJ65fv77dbp86depkMnn44Yc/9rGPveuuu77zne8MBgN33nnn6NGj1Wp1bW3t9OnTjzzyyPPPP79z587Pfvazl1566S9/+cs777zz+eefv3nz5j/+4z/ee++9W7Zs+fznPz84OLhy5crhw4cfe+yx99577y9/+cuVlZVXX3116dKlS5cu3XfffT/4wQ9++tOfbt26tVQqveGGG55++un19fXPPfdcv379I4888g//8A/79u3bvXt3s9k8ffr0+eef/9hjj62srOzt7f3ud7/77Gc/u3Xr1scee+zqq6/+0z/90+3bt3/5y19+97vfPXTo0O7du6enp9evX7/11ltvvfVWY2PjnXfeeckll9zb27tixYr169ePj4+fPn16//793//+90uXLr3lllsvvfTSc889d+vWraNHj7766quDg4M33HBDpVJZsWLFu9/97hdeeOHChQvXX3/9Qw89NDo6ev/+/cWLF6dPnz5z5sxvfetb6+vr8/PzZ8+evffeez/60Y+Gh4fXX3/9+PHjL7/88rPPPvt3f/d3W7ZsueOOO84777z58+dnZ2d/7/d+78CBA1988cWvvPLK0aNHz5w5c+nSpf/8z//8wgsvLFmy5Ne//vW3v/3tU089ddddd6VSaWdn5yc/+cm2bduuvfbaP/3TPx08ePDMM8/8+Mc/3rhx48yZM3v37j179uwTTzzxxS9+sW3btj/5kz+5cePGiy++eP369b/3e7/n9Xq9vb2f/exn3/zmN7/4xS9+5CMfGR4ePv3007/61a/+/M//fPv27f/yL/9y5MiR69evv/rVrz766KPf/e53v/3tb6dPn37iiSe+973vra2tfeUrX7ntttuWLFmybNmyr3zlK7/97W8HBwevvfbaD37wg2w2e/ny5QcPHrz66qs//vGPf/u3f3vjjTe+8pWv7N27d//+/Q8++ODf/u3fPvLII9/5zneeeuqp4eHhV199tV6vV6vVCRMm7Nu3b2Vl5be//e3o6Ohjjz02Pj6+fPnyL37xi9/5zne2b9/+P/7H/5jP5z/84Q+fP3/+8ssv33HHHf/0T/90xx13XHfddT/84Q9ffvnlL33pS2+++ea2bdv29/f/7d/+bWlp6Y477vjABz7Q2Nj4jW984/nnn7/55puPPfbYq6++euTIkWPHjt19991f+cpXfvvb33744YdWrVr1u9/97o033njw4MH/+q//+qmnntq7d+8f/uEfPvLII/v7+6+//vrq6uqf/OQnf/M3f/PSSy8dPHiwv7//7bff/v7v//6ZZ56JxWLXrl2bP3/+66+/fvLkyRdeeOGGG2744Ac/eOONN37wgx8sLCxUKpXNmzf/8z//8+jRo7/+9a/39/fvf/7zjz76aLVa3bdv34svvnj8+PE3v/nNn/zkJ5999tlkMrmxsfGll15avXr1p59+esOGDcuXL7/66qvHjh0bHBx8+OGH586d+8lPfnL37t0TJ0587Wtf+8xnPvO9731vd3f3P/7jP7Zt2/azn/3sxo0b3/rWt/7sz/7shg0bNm3a9NBDD916662f/exnV69evfjii4eHh/v27VuzZs2WLVt+/OMf37x58x/+4R/8xV/8xWOPPZbL5W677bbf/e53z58/v2/fvrW1tSuvvPLjH/94d3f3m9/85saNG8ePH9+2bduLL764du3a559//vnnn//2t7+9e/fuV7/61Wq1+vDDD3/7298+ePDgq6++evzxx2+//fbJkyd/8Rd/sWvXrmq1+qMf/eixxx5bW1v74osvPvjggz/7sz9bWlp66aWXFi9e/M53vvPSSy/98R//8fLy8g9/+MOvfvWrr3zlK8VicdmyZQ8//PAHP/jB+fPn19fXV1ZWXn311R/+8Ievfe1rL7/88oMPPnj69Omf/OQn3/ve96anp69du7azs/Piiy9+9atf/epXv6pUKl944YVvfvObO3fu3Lx588orrzz99NMzMzNf+tKXTp8+vWDBgh07duzt7b388svPPvvsxz/+8cDAwNve9rYXX3zxP/7H/1hZWZmZmfn4xz/++OOPf+Mb39i/f/+jjz76J3/yJ3/2Z39WLBa/+tWvPv/88z/3cz+XJEl/f/9Pf/pTH/zgB6+//vqlS5ceffTRj370o0ql8sknn/zABz7w6quvHj58eHBw8DOf+czPfvazmZmZd95552c/+9nzzz//1re+9dBDD91xxx3T09N79+79+Mc/fuedd7Zu3fr0009fvnz5rbfeev3117/97W9HR0d/+ctfVlZW3v/+97/4xS9+/vOfv+qqqz788MM333zz7t27x44de+edd37ta1/b2dn57Gc/e+fOne3bt//V3/1dJBIRiUQqlcrTTz+9Zs2a+++/f//+/W+++cYHP/jBJ5988mMf+9j69evPP//8bdu2bdu2ra+v/2f/7J+NjY0DBw789re/fe+99/7gBz94//33Dxw4cOedd77xjW+8ePHiiy++eNddd2VmZv7whz/85je/ef7551944YXf/OY3n/70p//0T/90+vTpT3ziE6+//vr777+/YMGCv/mbv/nGN77x7W9/+7nPfS6Xy+fPnx8eHr7nnns+97nPvfjiixcvXvzmN7+5fPny4uLi7Nmzf/u3f7u2tvbUU0/t3r17sVhcvXr1P/2n/3TixIk9e/a8+uqr999//8GDB0uXLu3atWtkZOT++++/9tprn/70p8+fP//CCy+8+uqrV65cefHFF9/97nd/9KMf/ec//3m/39+2bVvXrl3VavWxj33srrvu2rt3729+85uXX375k08+edddd3V0dP7TP/3Tn/zkJz/4wQ9+8IMfPProo7feeuvtt9/+sY997LHHHnvzzTc7Oztvv/32ww8//Ld/+7dPPfXU2NjYxYsXf/M3f7Ny5cpTTz31pz/96e7u7t69e3/5l3/5i1/84sHBwY0bN3/zm99kWZaamrriiiu+9a1vffHFF4cOHYqLi5cvXz59+vS1117b0NBQtVotlUqjR4/+5Cc/6XQ6M2fOPP7443/3d3+3fft2tVp95CMf+fhjvw==";

  const pages = [
    { id: "home", label: "Trang chủ", icon: Home },
    { id: "about", label: "About me", icon: User },
    { id: "gallery", label: "Gallery", icon: Camera },
    { id: "contact", label: "Liên hệ", icon: Mail },
  ];

  const hobbies = [
    { title: "Đi du lịch", icon: MapPin, text: "Mình thích khám phá những nơi mới, lưu giữ kỷ niệm đẹp và trải nghiệm nhiều điều thú vị." },
    { title: "Nghe nhạc", icon: Music, text: "Âm nhạc giúp mình thư giãn, tạo cảm hứng tích cực và cân bằng cảm xúc mỗi ngày." },
    { title: "Xem phim", icon: Film, text: "Mình thích những bộ phim mang lại cảm xúc, câu chuyện đẹp và góc nhìn mới về cuộc sống." },
    { title: "Chụp ảnh", icon: Camera, text: "Mình thích ghi lại khoảnh khắc đẹp, màu sắc nhẹ nhàng và cảm xúc chân thật qua từng bức ảnh." },
  ];

  const skills = [
    "Giao tiếp tốt",
    "Hòa đồng",
    "Biết lắng nghe",
    "Thích tìm tòi, khám phá và học hỏi những điều mới",
  ];

  const contacts = [
    {
      label: "Facebook",
      value: "facebook.com/share/194xL8VRPQ",
      href: "https://www.facebook.com/share/194xL8VRPQ/?mibextid=wwXIfr",
    },
    {
      label: "Instagram",
      value: "@_thaolihn_",
      href: "https://www.instagram.com/_thaolihn_/",
    },
    {
      label: "Gmail",
      value: "thaolinh21908@gmail.com",
      href: "mailto:thaolinh21908@gmail.com",
    },
  ];

  const galleryImages = useMemo(
    () => [
      { title: "Chân dung", subtitle: "Mềm mại và tự nhiên", image: profileImage, tall: true },
      { title: "Pastel mood", subtitle: "Pink & blue aesthetic", gradient: "from-[#f8dae9] to-[#ffffff]" },
      { title: "Travel diary", subtitle: "Những chuyến đi đáng nhớ", gradient: "from-[#b9d6f3] to-[#ffffff]" },
      { title: "Daily vibes", subtitle: "Nhẹ nhàng và tích cực", gradient: "from-[#f6e7ef] to-[#dcecff]" },
      { title: "Photo moments", subtitle: "Lưu giữ khoảnh khắc đẹp", gradient: "from-white to-[#f8dae9]" },
    ],
    []
  );

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case "about":
        return <AboutSection hobbies={hobbies} skills={skills} profileImage={profileImage} />;
      case "gallery":
        return <GallerySection galleryImages={galleryImages} />;
      case "contact":
        return <ContactSection contacts={contacts} />;
      default:
        return (
          <HomeSection
            profileImage={profileImage}
            contacts={contacts}
            hobbies={hobbies}
            skills={skills}
            onExplore={() => setActivePage("about")}
            onGallery={() => setActivePage("gallery")}
          />
        );
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,#f8dae9_0%,#f7dde9_42%,#b9d6f3_100%)] text-slate-800">
      <FloatingBackground />

      <header className="sticky top-0 z-40 border-b border-white/30 bg-white/35 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <button
            onClick={() => setActivePage("home")}
            className="flex items-center gap-3 rounded-full bg-white/60 px-4 py-2 text-left shadow-sm transition hover:-translate-y-0.5"
          >
            <div className="h-10 w-10 overflow-hidden rounded-full ring-2 ring-white/80">
              <img src={profileImage} alt="avatar" className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-sm font-semibold">Nguyễn Thảo Linh</p>
              <p className="text-xs text-slate-500">Portfolio cá nhân</p>
            </div>
          </button>

          <nav className="hidden items-center gap-2 md:flex">
            {pages.map((page) => {
              const Icon = page.icon;
              const active = activePage === page.id;
              return (
                <button
                  key={page.id}
                  onClick={() => setActivePage(page.id)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                    active
                      ? "bg-slate-900 text-white shadow-lg"
                      : "bg-white/55 text-slate-700 hover:bg-white/80"
                  }`}
                >
                  <Icon size={16} />
                  {page.label}
                </button>
              );
            })}
          </nav>

          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="rounded-full bg-white/70 p-3 shadow-sm md:hidden"
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-white/30 bg-white/45 px-5 py-4 backdrop-blur-xl md:hidden"
            >
              <div className="grid gap-2">
                {pages.map((page) => {
                  const Icon = page.icon;
                  return (
                    <button
                      key={page.id}
                      onClick={() => setActivePage(page.id)}
                      className="flex items-center gap-3 rounded-2xl bg-white/75 px-4 py-3 text-sm font-medium text-slate-700"
                    >
                      <Icon size={16} />
                      {page.label}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

function FloatingBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{ y: [0, -18, 0], x: [0, 12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-3rem] top-20 h-48 w-48 rounded-full bg-white/35 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 24, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-10 top-28 h-72 w-72 rounded-full bg-[#f8dae9]/45 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -12, 0], x: [0, 16, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-[#b9d6f3]/40 blur-3xl"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.55),transparent_34%)]" />
    </div>
  );
}

function HomeSection({ profileImage, contacts, hobbies, skills, onExplore, onGallery }) {
  return (
    <div className="space-y-8">
      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.05 }}
          className="rounded-[36px] border border-white/40 bg-white/50 p-6 shadow-2xl backdrop-blur-xl md:p-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
            <Sparkles size={16} /> Trang portfolio cá nhân
          </span>

          <div className="mt-6 space-y-4">
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Xin chào, mình là <span className="text-slate-900">Nguyễn Thảo Linh</span>
            </h1>
            <p className="text-lg text-slate-600 md:text-xl">Học sinh THPT Bỉm Sơn</p>
            <p className="max-w-2xl text-base leading-8 text-slate-700 md:text-lg">
              Mình yêu thích sự nhẹ nhàng, tích cực và luôn mong muốn phát triển bản thân mỗi ngày.
              Đây là nơi mình lưu lại những thông tin, sở thích, kỹ năng và những điều đẹp đẽ trong hành trình của mình.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={onExplore}
              className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-0.5"
            >
              Khám phá About me
            </button>
            <button
              onClick={onGallery}
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-xl transition hover:-translate-y-0.5"
            >
              Xem Gallery
            </button>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <StatCard value="04" label="Sở thích nổi bật" />
            <StatCard value="04" label="Kỹ năng chính" />
            <StatCard value="100%" label="Năng lượng tích cực" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.12 }}
          className="grid gap-6"
        >
          <div className="group relative overflow-hidden rounded-[36px] border border-white/40 bg-white/45 p-5 shadow-2xl backdrop-blur-xl">
            <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.4),rgba(255,255,255,0.02))]" />
            <div className="relative overflow-hidden rounded-[28px]">
              <img
                src={profileImage}
                alt="Ảnh đại diện Nguyễn Thảo Linh"
                className="aspect-[4/4.8] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <GlassCard title="Liên hệ nhanh">
              <div className="space-y-3">
                {contacts.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="block rounded-2xl bg-white/75 p-4 transition hover:-translate-y-0.5"
                  >
                    <p className="text-sm text-slate-500">{item.label}</p>
                    <p className="mt-1 break-all font-semibold">{item.value}</p>
                  </a>
                ))}
              </div>
            </GlassCard>

            <GlassCard title="Màu chủ đạo">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <ColorSwatch name="#F8DAE9" className="bg-[#f8dae9]" />
                  <ColorSwatch name="#B9D6F3" className="bg-[#b9d6f3]" />
                </div>
                <p className="text-sm leading-7 text-slate-600">
                  Tông pastel hồng và xanh giúp tổng thể website mềm mại, nữ tính và hiện đại.
                </p>
              </div>
            </GlassCard>
          </div>
        </motion.div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <GlassCard title="Sở thích của mình">
          <div className="mt-1 grid gap-4 md:grid-cols-2">
            {hobbies.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * index }}
                  className="rounded-[24px] bg-white/75 p-5 shadow-sm transition hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f8dae9] text-slate-700 shadow-sm">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </GlassCard>

        <GlassCard title="Kỹ năng nổi bật">
          <div className="grid gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className="flex items-start gap-4 rounded-[24px] bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(185,214,243,0.45))] p-4 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sm font-bold shadow-sm">
                  0{index + 1}
                </div>
                <div>
                  <p className="font-semibold text-slate-800">{skill}</p>
                  <p className="mt-1 text-sm text-slate-600">Mình luôn cố gắng phát huy điểm mạnh này trong học tập và cuộc sống.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </section>
    </div>
  );
}

function AboutSection({ hobbies, skills, profileImage }) {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
      <GlassCard className="h-fit" title="About me">
        <div className="space-y-5">
          <div className="overflow-hidden rounded-[28px]">
            <img src={profileImage} alt="Nguyễn Thảo Linh" className="aspect-[4/5] w-full object-cover" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Nguyễn Thảo Linh</h2>
            <p className="mt-1 text-slate-500">Học sinh THPT Bỉm Sơn</p>
          </div>
          <p className="text-base leading-8 text-slate-700">
            Mình là người yêu thích sự chân thành, nhẹ nhàng và luôn sẵn sàng học hỏi. Mình thích kết nối với mọi người,
            lắng nghe những câu chuyện xung quanh và không ngừng tìm kiếm những trải nghiệm mới để hoàn thiện bản thân.
          </p>
        </div>
      </GlassCard>

      <div className="grid gap-6">
        <GlassCard title="Mình là người như thế nào?">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Tự tin trong giao tiếp và dễ tạo thiện cảm với mọi người",
              "Luôn lắng nghe để thấu hiểu và chia sẻ tích cực",
              "Yêu thích khám phá, học hỏi và trải nghiệm điều mới",
              "Trân trọng những khoảnh khắc đẹp trong học tập và cuộc sống",
            ].map((item) => (
              <div key={item} className="rounded-[24px] bg-white/75 p-5 shadow-sm">
                <div className="flex items-center gap-2 text-slate-800">
                  <Heart size={16} />
                  <span className="font-semibold">Điểm nổi bật</span>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item}</p>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard title="Sở thích & Kỹ năng">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Sở thích</p>
              <div className="flex flex-wrap gap-3">
                {hobbies.map((item) => (
                  <span key={item.title} className="rounded-full bg-[#f8dae9]/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                    {item.title}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Kỹ năng</p>
              <div className="space-y-3">
                {skills.map((item) => (
                  <div key={item} className="rounded-2xl bg-white/75 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

function GallerySection({ galleryImages }) {
  return (
    <div className="space-y-8">
      <GlassCard title="Gallery ảnh">
        <p className="max-w-2xl text-sm leading-7 text-slate-600">
          Một góc nhỏ mang phong cách pastel nhẹ nhàng, lưu giữ những cảm xúc đẹp, những sắc màu mình yêu thích và cá tính riêng của mình.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className={`group overflow-hidden rounded-[28px] border border-white/40 bg-white/60 shadow-xl ${item.tall ? "md:row-span-2" : ""}`}
            >
              {item.image ? (
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]"
                  />
                </div>
              ) : (
                <div className={`flex min-h-[280px] items-end bg-gradient-to-br ${item.gradient} p-6`}>
                  <div className="rounded-[24px] bg-white/70 p-4 shadow-md backdrop-blur-md">
                    <p className="text-lg font-semibold">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-600">{item.subtitle}</p>
                  </div>
                </div>
              )}
              {item.image && (
                <div className="p-5">
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{item.subtitle}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}

function ContactSection({ contacts }) {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
      <GlassCard title="Kết nối với mình">
        <div className="space-y-4">
          <p className="text-base leading-8 text-slate-700">
            Mình rất vui khi được làm quen, trò chuyện và kết nối với những người bạn mới. Bạn có thể liên hệ với mình qua các nền tảng dưới đây.
          </p>
          <div className="space-y-4">
            {contacts.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * index }}
                className="block rounded-[24px] bg-white/75 p-5 shadow-sm transition hover:-translate-y-1"
              >
                <p className="text-sm text-slate-500">{item.label}</p>
                <p className="mt-1 break-all text-lg font-semibold text-slate-800">{item.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </GlassCard>

      <GlassCard title="Lời nhắn nhỏ">
        <div className="flex h-full flex-col justify-between gap-6">
          <div className="rounded-[28px] bg-[linear-gradient(135deg,rgba(248,218,233,0.85),rgba(185,214,243,0.65))] p-6 shadow-inner">
            <p className="text-lg font-semibold text-slate-800">“Luôn nhẹ nhàng, tích cực và không ngừng phát triển bản thân.”</p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              Mình tin rằng sự chân thành, lắng nghe và tinh thần học hỏi sẽ giúp mỗi người trở nên tốt hơn mỗi ngày.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[24px] bg-white/75 p-5 shadow-sm">
              <p className="text-sm text-slate-500">Trường học</p>
              <p className="mt-2 font-semibold">THPT Bỉm Sơn</p>
            </div>
            <div className="rounded-[24px] bg-white/75 p-5 shadow-sm">
              <p className="text-sm text-slate-500">Phong cách</p>
              <p className="mt-2 font-semibold">Pastel, nhẹ nhàng, hiện đại</p>
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}

function GlassCard({ title, children, className = "" }) {
  return (
    <section className={`rounded-[32px] border border-white/40 bg-white/50 p-6 shadow-2xl backdrop-blur-xl md:p-7 ${className}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{title}</p>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-[24px] bg-white/80 p-4 shadow-md">
      <p className="text-2xl font-bold text-slate-900">{value}</p>
      <p className="mt-1 text-sm text-slate-500">{label}</p>
    </div>
  );
}

function ColorSwatch({ name, className }) {
  return (
    <div className="rounded-[24px] bg-white/75 p-3 shadow-sm">
      <div className={`h-20 rounded-[18px] ${className}`} />
      <p className="mt-3 text-sm font-semibold text-slate-700">{name}</p>
    </div>
  );
}
