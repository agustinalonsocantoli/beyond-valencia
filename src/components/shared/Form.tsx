/* eslint-disable @typescript-eslint/no-explicit-any */
interface Props {
    labelButton: string;
    nameClass: string;
    handleSubmit: (action: any) => void;
    handleInput: (action: any) => void;
}

export const FormBook = (props: Props) => {
    const { handleInput, handleSubmit, labelButton, nameClass } = props;

    return(
        <form className={nameClass} onSubmit={handleSubmit}>
            <label>Name<span>*</span></label>
            <input type="text" name="name"  onChange={handleInput}/>

            <label>Email<span>*</span></label>
            <input type="email" name="email"  onChange={handleInput}/>

            <label>Phone<span>*</span></label>
            <input type="tel" name="phone"  onChange={handleInput}/>

            <label>Comment</label>
            <textarea name="comment" onChange={handleInput}></textarea>

            <button type="submit">{labelButton}</button>
        </form>
    );
};