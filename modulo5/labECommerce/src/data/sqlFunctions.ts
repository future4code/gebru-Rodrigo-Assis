import { connection } from "./connection"

export const userSelect = async () => {
    const result = await connection ("labecommerce_users")
    .select ("*")
    return result
}

export const productSelect = async () => {
    const result = await connection ("labecommerce_products")
    .select ("*")
    return result
}

export const purchsesSelect = async () => {
    const result = await connection ("labecommerce_purchases")
    .select ("*")
    
    return result
}

export const priceSelect = async (product_id:any) => {
    const result = await connection ("labecommerce_products")
    .select ()
    .where ({id:product_id})
    return result
}

export const InsertUserPurchases = async (user_id:string, product_id:string, quantity:number, total_price:number) => {

    await connection ("labecommerce_purchases")
    
    .insert (
       {
           user_id:user_id,
           product_id:product_id,
           quantity:quantity,
           total_price:total_price
       }
    )
   
   }


export const insertUser = async (id:string, name:string, email:string, password:string) => {

 await connection ("labecommerce_users")
 
 .insert (
    {
        id:id,
        name:name,
        email:email,
        password:password
    }
 )

}

export const insertProduct = async (id:string, name:string, price:number, image_url:string) => {

    await connection ("labecommerce_products")
    
    .insert (
       {
           id:id,
           name:name,
           price:price,
           image_url:image_url
       }
    )
   
   }
