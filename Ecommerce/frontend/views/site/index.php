<?php

/** @var yii\web\View $this */
/** @var  \yii\data\ActiveDataProvider $dataProvider */

$this->title = 'My Yii Application';
?>
<div class="site-index">

    <div class="body-content">
            <?php echo \yii\widgets\ListView::widget([
                    'dataProvider' => $dataProvider,
                    'layout' => '{summary}<div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">{items}</div>{pager}',
                    'itemView' => '_product_Game',
                    'options' => [
                            'class' => 'row'
                    ],
                    'itemOptions' => [
                            'class' => 'col mb-5'
                    ],
                    'pager' => [
                            'class' => \yii\bootstrap5\LinkPager::class
                    ]
            ])?>
    </div>
</div>
