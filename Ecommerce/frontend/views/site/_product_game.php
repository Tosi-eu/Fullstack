<?php

/** @var \common\models\Product $model */

?>
<div class="card h-100">
        <!-- Product image-->
        <a href="#">
            <img class="card-img-top" src="<?php echo $model->getImageUrl()?>" alt="..." />
        </a>
        <!-- Product details-->
        <div class="card-body p-4">
            <div class="text-center">
                <!-- Product name-->
                <h5 class="fw-bolder">
                    <a href="#">
                        <?php echo $model->name ?>
                    </a>
                </h5>
                <!-- Product price-->
                <?php echo Yii::$app->formatter->asCurrency($model->price)?>
                <div class="card-text">
                    <?php echo $model->getFormatedDescription() ?>
                </div>
            </div>
        </div>
        <!-- Product actions-->
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add To Cart</a></div>
        </div>
    </div>

