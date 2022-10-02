import EmpleadoRow from "./EmpleadoRow";

const EmpleadoList = () => {
    const arregloEmpleado = [
        { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "https://definicion.de/wp-content/uploads/2016/02/avatar.jpg" },
        { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "https://us.123rf.com/450wm/yupiramos/yupiramos2004/yupiramos200436847/145498923-dise%C3%B1o-de-ilustraci%C3%B3n-de-vector-de-icono-de-personaje-de-avatar-de-param%C3%A9dico-masculino.jpg?ver=6" },
        { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "https://images.vexels.com/media/users/3/145908/raw/52eabf633ca6414e60a7677b0b917d92-creador-de-avatar-masculino.jpg" },
        { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "https://img.freepik.com/vector-premium/avatar-elegante-hombre-negocios_24877-18075.jpg" },
        { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuuLfSQMyO_Pg7qqYuCDrFxzzJ7sXf7CBcjmT0HnD3V6PPzy48dOxqUrl9e3o3ewToYvc&usqp=CAU" },
        { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBBOs8S0jGZZWk1VrdOtwiWxqbQGpO9W2yR8U_wZEgs9qIecLIRUMqXZorXWU5SZ4MD84&usqp=CAU" },
        { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", pic: "https://i.pinimg.com/564x/04/11/48/041148ae1567ae662b601a361c4f367a.jpg" },
        { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG6rJFwOYskn-hkKtNI3uuFKjmSxBHiX_MGTn__tr8Uj9zk5mCMStfDUGJCvB-CXejBbc&usqp=CAU" },
        { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5H08cNMG5Qmy36vGk2Dq4NF161LcBMp37AQpKEpetL4rt_h2ThL5JAtKyIFVoJiDw1dw&usqp=CAU" },
      ]
  return (
    <section>
      <EmpleadoRow arregloEmpleado={arregloEmpleado}></EmpleadoRow>
    </section>
  );
};

export default EmpleadoList;