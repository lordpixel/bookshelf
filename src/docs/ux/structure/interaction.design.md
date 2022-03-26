# Interaction Design

## Navigation

The following diagrams describe how the User will interact with The System's Navigation.

### User clicks Books link

When the User clicks on `Books` in the aside Navigation, The System will present the list of available books.

```
                clicks    +-------+      sees       +------------+
        User ------------>| Books |---------------->| Books list |
                          +-------+                 +------------+
```

### User clicks Wishlist link

When the User clicks on `wishlist` in the aside Navigation, The System will present the User's wishlist.

```
                clicks    +----------+      sees       +------------+
        User ------------>| Wishlist |---------------->|  Wishlist  |
                          +----------+                 +------------+
```


## Book list

The following diagrams describe how the User will interact with the Books list section.

### User visits Books list

The User is presented with the list of available Books.

```
                visits    +-----------+      sees       +---------------------------+
        User ------------>| Book list |---------------->|  List of available books  |
                          +-----------+                 +---------------------------+
```

### User clicks on the Book's cover

When the User clicks on a Book's cover, that Book will be `added to` their `wishlist`.

```
                clicks    +------------+    adds Book    +------------+
        User ------------>| Book cover |---------------->|  Wishlist  |
                          +------------+                 +------------+
```

## Wishlist

The following diagrams describe how the User will interact with the Wishlist section.

### User visits Wishlist

The User is presented with the Wishlist.

```
                visits    +----------+      sees       +------------+
        User ------------>| Wishlist |---------------->|  Wishlist  |
                          +----------+                 +------------+
```

### User clicks on the Book's cover

When the User clicks on a Book's cover, that Book will be `removed from` to their `wishlist`.

```
                clicks    +------------+  removes Book   +------------+
        User ------------>| Book cover |---------------->|  Wishlist  |
                          +------------+                 +------------+
```

[<- Back to UX](../user.experience.md) &nbsp; [<-- Back to Index](../../README.md)